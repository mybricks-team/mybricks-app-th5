import React, { useEffect, useState } from 'react'
import API from '@mybricks/sdk-for-app/api'

import ConfigServer from './ConfigServer'
import ConfigEnv from './ConfigEnv'
import useConfig from './useConfig'
import ConfigPlugin from './ConfigPlugin'
export const _NAMESPACE_ = APP_NAME
import style from './app.less'
import { Collapse, Spin, Card, Form, Switch, Input } from 'antd'
// import ManacoEditor from './../components/manaco';

const HTML_CODE = `<!-- 请输入Html代码，使用非常耗时的代码可能会影响页面渲染速度 -->
<!-- <script src="链接"></script> -->
`

export default (props) => {
  const { options = {} } = props
  const configContext = useConfig(_NAMESPACE_, {}, options);

  const [state, setState] = useState({
    headTags: '',
  })

  useEffect(() => {
    if (configContext.loading === false) {
      setState(c => ({ ...c, headTags: configContext.config?.headTags ?? '' }))
    }
  }, [configContext.loading])

  const isInGroup = options?.type === 'group'
  return (
    <div style={{ paddingBottom: 30 }}>
      <Spin spinning={configContext.loading}>
        <Card type="inner" title="页面渲染" style={{ marginTop: 0 }}>
          {/* <Form> */}
          <Form.Item
            label="智能分包【即将上线】"
            // name="splitChunk"
            extra={
              <p style={{ fontSize: 13 }}>
                开启后将会自动对超过文件大小阈值的bundle进行拆包
              </p>
            }
            // rules={[
            //   { required: true, message: 'Please input your username!' },
            // ]}
          >
            <Switch
              disabled
              checked={configContext.config?.splitChunk}
              onChange={(val) =>
                configContext.mergeUpdateConfig({ splitChunk: val })
              }
            />
          </Form.Item>
          <Form.Item
            label="图片懒加载【即将上线】"
            // name="lazyImage"
            extra={
              <p style={{ fontSize: 13 }}>
                开启后，使用了data-src的img标签图片将会等到出现在视口区域再加载
              </p>
            }
            // rules={[
            //   { required: true, message: 'Please input your username!' },
            // ]}
          >
            <Switch
              disabled
              checked={configContext.config?.lazyImage}
              onChange={(val) =>
                configContext.mergeUpdateConfig({ lazyImage: val })
              }
            />
          </Form.Item>
          <Form.Item
            label="头部标签"
            // name="headTags"
            // extra={<p style={{ fontSize: 13 }}>开启后，使用了data-src的img标签图片将会等到出现在视口区域再加载</p>}
            // rules={[
            //   { required: true, message: 'Please input your username!' },
            // ]}
          >
            <Input.TextArea
              rows={3}
              placeholder={HTML_CODE}
              value={state.headTags}
              onChange={e => {
                setState(c => ({ ...c, headTags: e.target.value }))
              }}
              onBlur={(e) => {
                configContext.mergeUpdateConfig({ headTags: state.headTags })
              }}
            />
            {/* <ManacoEditor defaultValue={HTML_CODE}  onChange={val => configContext.mergeUpdateConfig({ headTags: val })} /> */}
          </Form.Item>

          {/* </Form> */}
        </Card>
        <Card type="inner" title="发布环境" style={{ marginTop: 30 }}>
          <ConfigEnv {...configContext} />
        </Card>
        {/* <Collapse
          style={{ padding: 24 }}
          className={style.wrapper}
          defaultActiveKey={[1, 2, 3]}
        >
          {!isInGroup && <Collapse.Panel key={1} header="服务地址">
          <ConfigServer {...configContext} />
        </Collapse.Panel>}
          <Collapse.Panel key={1} header="发布环境">
            <ConfigEnv {...configContext} />
          </Collapse.Panel>

          <Collapse.Panel key={2} header="header 注入">
            <div ref={headerEditor} style={{ height: 300 }}></div>
          </Collapse.Panel>

          {!isInGroup && <Collapse.Panel key={3} header="插件配置">
          <ConfigPlugin {...configContext} />
        </Collapse.Panel>}
        </Collapse> */}
      </Spin>
    </div>
  )
}
