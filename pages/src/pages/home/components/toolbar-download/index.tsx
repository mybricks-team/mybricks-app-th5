import React, { useCallback, useEffect, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Modal, Spin, message } from 'antd'
import API from "@mybricks/sdk-for-app/api";
import { fAxios } from "../../../../services/http";

import css from './index.less'

enum Status {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  EMPTY = 'EMPTY',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export default ({ fileId }) => {
  const [list, setList] = useState([])
  const [open, setOpen] = useState(false)

  const [status, setStatus] = useState<Status>(Status.IDLE)

  const getLatest = useCallback(() => {
    setStatus(Status.LOADING)
    API.File.getPublishVersions({
      fileId,
      pageIndex: 1,
      pageSize: 100,
    }).then(({ code, data }) => {
      if (code > 0) {
        if (data.length) {
          setList(data)
          setStatus(Status.SUCCESS)
        } else {
          setList([])
          setStatus(Status.EMPTY)
        }
      } else {
        setStatus(Status.ERROR)
      }
    }).catch(e => {
      setStatus(Status.ERROR)
    })
  }, [fileId])

  const download = useCallback((pubId) => {
    const loadingKey = 'donwload';
    message.loading({
      content: '下载中...',
      key: loadingKey
    });

    (async () => {
      const pubCont = await API.File.getPublishContent({ pubId });
      console.log('pubCont', pubCont);

      if (!pubCont?.content?.url) {
        throw new Error('发布产物中无url链接')
      }


      // 补齐domain，如果没有的话
      let urlHasDomain = pubCont?.content?.url;
      if (urlHasDomain.indexOf('http') !== 0) {
        // 如果不包含域名，则使用new URL的方式补充当前浏览器域名
        urlHasDomain = new URL(urlHasDomain, window.location.origin).href;
      }

      // const result = await fetch(`/api/th5/download?url=${urlHasDomain}`);

      const result = await fetch(`/api/th5/download?url`)
      if (result.headers.get('content-type') === 'application/zip') {
        downloadFromUrl(`${pubCont.id}_${pubCont.type}_${pubCont.version}.zip`, `/api/th5/download?url=${urlHasDomain}`)
        return
      }

      // content-type不是zip包就提示报错
      const data = await result.json()
      throw new Error(data?.message)
    })().catch((err) => {
      message.error(err?.message ?? '下载失败')
    }).finally(() => {
      message.destroy(loadingKey)
    })
  }, []);

  useEffect(() => {
    if (open) {
      getLatest();
    }
  }, [open, getLatest])

  return (
    <div className={css.download}>
      <div className={css.btn} onClick={() => setOpen(true)}>
        <DownloadOutlined />
        <span>产物下载</span>
      </div>
      <Modal title="构建产物列表" open={open} visible={open} onCancel={() => setOpen(false)} footer={null}>
        <Spin spinning={status === Status.LOADING}>
          <div className={css.content}>
            {
              status === Status.SUCCESS && list.map(item => {
                return (
                  <div className={css.item} onClick={() => download(item.id)}>
                    <span className={css.version}>{item.version}</span>
                    { item.type && <span className={css.type}>{item.type}</span> }
                    <DownloadOutlined className={css.download} />
                  </div>
                )
              })
            }
            {
              status === Status.EMPTY && <div className={css.empty}>暂未发布页面，请先发布页面</div>
            }
            {
              status === Status.ERROR && <div className={css.empty}>查询发布记录失败，请重新查询</div>
            }
          </div>
        </Spin>
      </Modal>
    </div>
  )
}

function downloadFromUrl (filename, url) {
  let a = document.createElement('a'); 
  a.style = 'display: none'; // 创建一个隐藏的a标签
  a.download = filename;
  a.href = url;
  document.body.appendChild(a);
  a.click(); // 触发a标签的click事件
  document.body.removeChild(a);
}

function saveFile(data, fileName) {
  if (typeof data === 'object') {
      data = JSON.stringify(data)
  }
  let file = new Blob([data], {type: "application/json"});
  let url = window.URL || window.webkitURL;
  let fileURL = url.createObjectURL(file);
  let a = document.createElement("a");
  a.href = fileURL;
  a.download = fileName;
  a.target = "_self";
  a.click();
  url.revokeObjectURL(fileURL);
}