import React, { useMemo, useCallback, useRef, useEffect, useState } from 'react'
// import CodeEditor from '../components/code-editor'
import Params from '../components/param';
import css from './index.less'

enum CNType {
  'CLK' = '点击',
  'EXP' = '曝光',
}

const getCNType = (type) => {
  return CNType[type] ?? type
}

const Panel = ({ title, extra, children }) => {
  return (
    <div className={css.panel}>
      <div className={css.header}>
        <div className={css.title}>{title}</div>
        <div className={css.extra}>{extra}</div>
      </div>
      {children}
    </div>
  )
}

const Track = ({ type, title, id, value, onChange }) => {

  return (
    <div className={css.track}>
      <Params
        initValue={value}
        onChange={(v) => onChange?.({ id, type, params: v})}
      />
      {/* <CodeEditor
        // title={title}
        language={'javascript'}
        // comments={options?.comments}
        initValue={value}
        onBlur={(editor) => onChange?.({ id, type, func: editor.getValue()})}
        // onChange={(v) => onChange?.({ id, type, func: v })}
        // popView={editConfig.popView}
        // CDN={defaultOptions.CDN}
        height={'80px'}
      /> */}
    </div>
  )
}

const MutiTrack = ({ spm, comSpmDefines, onChange }) => {
  const [active, setActive] = useState(0)

  const types = Array.isArray(spm.type) ? spm.type : (typeof spm.type === 'string' ? [spm.type] : []);

  const hasMutiType = Array.isArray(types) && types.length;

  const extra = (
    <div className={css.types}>
      {hasMutiType ? (
        types.map((t, index) => {
          return (
            <div
              className={active === index ? css.typeActive : css.type}
              onClick={() => setActive(index)}
            >
              {getCNType(t)}
            </div>
          )
        })
      ) : (
        <div className={css.typeActive} style={{ cursor: 'default' }}>
          自定义
        </div>
      )}
    </div>
  )

  return (
    <Panel title={spm.title} extra={extra}>
      {hasMutiType ? (
        types.map((type, index) => {
          return (
            <div style={{ display: active === index ? 'block' : 'none' }}>
              <Track
                key={index}
                title={spm.title + `【${getCNType(type)}】`}
                type={type}
                id={spm.id}
                value={comSpmDefines.find((d) => d.id === spm.id && d.type === type)?.params}
                onChange={onChange}
              />
            </div>
          )
        })
      ) : (
        <Track
          title={spm.title}
          type={spm.type}
          id={spm.id}
          value={comSpmDefines.find((d) => d.id === spm.id)?.params}
          onChange={onChange}
        />
      )}
    </Panel>
  )
}

// 留着，说不定有用
const flattenSpms = (spms) => {
  return spms.reduce((acc, cur) => {
    if (Array.isArray(cur.type) && cur.type.length > 0) {
      return acc.concat(
        cur.type.map((type) => {
          return {
            id: cur.id,
            title: cur.title,
            type,
            params: cur.params,
          }
        })
      )
    }

    return acc.concat({
      id: cur.id,
      title: cur.title,
      params: cur.params,
    })
  })
}

export default ({ initValues, configs, onChange }) => {
  const [comSpmDefines, setComSpmDefines] = useState(initValues ?? [])

  useEffect(() => {
    onChange?.(comSpmDefines)
  }, [comSpmDefines])

  const setComSpm = useCallback(({ id, type, params }) => {
    setComSpmDefines((c) => {
      const targetSpmDefine = c.find((spmDefine) => spmDefine.id === id && spmDefine.type === type)

      if (targetSpmDefine) {
        targetSpmDefine.params = params
        return Array.from(c)
      }
      return c.concat({ id, type, params })
    })
  }, [])

  return (
    <div className={css.trackPanel}>
      {configs?.map((spm) => {
        return (
          <div style={{ marginBottom: 15 }}>
            <MutiTrack
              spm={spm}
              comSpmDefines={comSpmDefines}
              onChange={(define) => setComSpm(define)}
            />
          </div>
        )
      })}
    </div>
  )
}
