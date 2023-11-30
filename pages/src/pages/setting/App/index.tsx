import React, { useEffect, useState } from 'react'
import API from '@mybricks/sdk-for-app/api'
import { Collapse, Spin, Card, Form, Switch, Input } from 'antd'

import HtmlCode from './components/html-code'

import ConfigServer from './ConfigServer'
import ConfigEnv from './ConfigEnv'
import useConfig from './useConfig'
import ConfigPlugin from './ConfigPlugin'
export const _NAMESPACE_ = APP_NAME

import style from './app.less'

const BlockItem = ({ title, children }) => {
  return (
    <div className={style.block}>
      <div className={style.title}>{title}</div>
      <div>{children}</div>
    </div>
  )
}

export default (props) => {
  const { options = {} } = props
  const configContext = useConfig(_NAMESPACE_, {}, options)

  const isInGroup = options?.type === 'group'

  return (
    <div style={{ paddingBottom: 30 }}>
      <Spin spinning={configContext.loading}>
        <Card type="inner" title="页面渲染" style={{ marginTop: 0 }}>
          {!isInGroup && (
            <>
              <BlockItem title="智能分包【即将上线】">
                <Switch
                  disabled
                  checked={configContext.config?.splitChunk}
                  onChange={(val) =>
                    configContext.mergeUpdateConfig({ splitChunk: val })
                  }
                />
                <span className={style.extra} style={{ fontSize: 13 }}>
                  开启后将会自动对超过文件大小阈值的bundle进行拆包
                </span>
              </BlockItem>
              <BlockItem title="图片懒加载【即将上线】">
                <Switch
                  disabled
                  checked={configContext.config?.lazyImage}
                  onChange={(val) =>
                    configContext.mergeUpdateConfig({ lazyImage: val })
                  }
                />
                <span className={style.extra} style={{ fontSize: 13 }}>
                  开启后，使用了data-src的img标签图片将会等到出现在视口区域再加载
                </span>
              </BlockItem>
            </>
          )}
          <BlockItem title="Html模板">
            {configContext.ready && (
              <HtmlCode
                defaultValue={configContext.config?.htmlInjects}
                onChange={(v) =>
                  configContext.mergeUpdateConfig({ htmlInjects: v })
                }
              />
            )}
          </BlockItem>
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
