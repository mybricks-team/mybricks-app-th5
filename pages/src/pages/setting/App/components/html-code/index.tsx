import React, { useCallback, useEffect, useRef, useState } from 'react'
import MonacoEditor from '@mybricks/code-editor'
import _debounce from 'lodash/debounce'
import { LOCAL_EDITOR_ASSETS } from './../../../../../constants'


const HTML_CODE = `<!-- 请输入Html代码，使用非常耗时的代码可能会影响页面渲染速度 -->
<!-- <script src="链接"></script> -->
`

import css from './index.less'

const CodeCard = ({ title, desc, children }) => {
  return (
    <div className={css.code}>
      <div className={css.title}>{title}<p className={css.desc}>{desc}</p></div>
      <div className={css.body}>
        {children}
      </div>
    </div>
  )
}

interface Hooks {
  metaAppend: string,
  assetsPrepend: string,
  assetsAppend: string,
  bodyPrepend: string,
  bodyAppend: string
}

export default ({ defaultValue, onChange }) => {

  const [hooks, setHooks] = useState<Hooks>(defaultValue ?? {});
  const hooksValuesRef = useRef<Hooks>(null)
  const prevHooksValuesRef = useRef<Hooks>(hooks)

  useEffect(() => {
    hooksValuesRef.current = hooks
  }, [hooks])

  const hanldeBlur = useCallback(_debounce(() => {
    if (prevHooksValuesRef.current !== hooksValuesRef.current) { // 注意，这里是基于指针的比对
      onChange?.(hooksValuesRef.current)
      prevHooksValuesRef.current = hooksValuesRef.current
    }
  }, 300), [onChange])


  return (
    <div
      className={css.wrapper}
    >
      <CodeCard title={'Meta标签追加'} desc={'在所有meta标签后面追加标签'} >
        <MonacoEditor
          // onMounted={onMonacoMounted}
          value={hooks.metaAppend}
          onChange={v => setHooks(c => ({ ...c, metaAppend: v }))}
          CDN={LOCAL_EDITOR_ASSETS.code.CDN}
          onBlur={hanldeBlur}
          height="100%"
          width="100%"
          language={'html'}
          autoSave={true}
        />
      </CodeCard>
      {/* <CodeCard title={'加载公共资源前'} desc={'在加载框架等资源之前追加标签，使用非常耗时的代码可能会影响页面渲染速度'}>
        <MonacoEditor
          // onMounted={onMonacoMounted}
          value={hooks.assetsPrepend}
          onChange={v => setHooks(c => ({ ...c, assetsPrepend: v }))}
          CDN={LOCAL_EDITOR_ASSETS.code.CDN}
          onBlur={hanldeBlur}
          height="100%"
          width="100%"
          language={'html'}
          autoSave={true}
        />
      </CodeCard> */}
      {/* <CodeCard title={'加载公共资源后'} desc={'在加载框架等资源之后追加标签，使用非常耗时的代码可能会影响页面渲染速度'}>
        <MonacoEditor
          // onMounted={onMonacoMounted}
          value={hooks.assetsAppend}
          onChange={v => setHooks(c => ({ ...c, assetsAppend: v }))}
          CDN={LOCAL_EDITOR_ASSETS.code.CDN}
          onBlur={hanldeBlur}
          height="100%"
          width="100%"
          language={'html'}
          autoSave={true}
        />
      </CodeCard> */}
      <CodeCard title={'加载公共资源后'} desc={'在加载框架等资源之后追加标签，使用非常耗时的代码可能会影响页面渲染速度'}>
        <MonacoEditor
          // onMounted={onMonacoMounted}
          value={hooks.bodyPrepend}
          onChange={v => setHooks(c => ({ ...c, bodyPrepend: v }))}
          CDN={LOCAL_EDITOR_ASSETS.code.CDN}
          onBlur={hanldeBlur}
          height="100%"
          width="100%"
          language={'html'}
          autoSave={true}
        />
      </CodeCard>
      <CodeCard title={'渲染页面后'} desc={'在主要的js文件执行完成之后追加标签'}>
        <MonacoEditor
          // onMounted={onMonacoMounted}
          value={hooks.bodyAppend}
          onChange={v => setHooks(c => ({ ...c, bodyAppend: v }))}
          CDN={LOCAL_EDITOR_ASSETS.code.CDN}
          onBlur={hanldeBlur}
          height="100%"
          width="100%"
          language={'html'}
          autoSave={true}
        />
      </CodeCard>
    </div>
  )
}
