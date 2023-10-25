import React, { useEffect, useRef, useState } from 'react'
import _throttle from 'lodash/throttle'
import css from './app.less'

const Block = ({ title, children }) => {
  return (
    <div className={css.block}>
      {title && <div className={css.title}>{title}</div>}
      {children}
    </div>
  )
}

const QRCodeCanvas = ({ content, style }) => {
  const ele = useRef(null)

  useEffect(() => {
    if (!ele.current) {
      return
    }
    window.QRCode?.toCanvas?.(
      ele.current,
      content,
      {
        height: 150,
        width: 150,
      },
      function (error) {
        if (error) console.error(error)
      }
    )
  }, [])

  return <canvas style={style} ref={ele}></canvas>
}

const SizeConfig = ({ value = { width: 375, height: 667 }, onChange }) => {
  const [config, setConfig] = useState(value);

  useEffect(() => {
    onChange?.(config)
  }, [config])

  return (
    <div className={css.size}>
      <span className={css.name}>预览窗口</span>
      <input className={css.width} type="number" value={config.width} onChange={e => setConfig(c => ({ ...c, width: Number(e.target.value) }))} />
      <span className={css.x}>X</span>
      <input className={css.height} type="number" value={config.height} onChange={e => setConfig(c => ({ ...c, height: Number(e.target.value) }))} />
    </div>
  )
  
}

const urlParamsMap = new URL(location.href).searchParams

const pageUrl = `${new URL(location.href).origin}/mfs/app/th5/preview/${urlParamsMap.get('fileId')}.html`;

enum WindowType {
  mobile = 'mobile',
  pc = 'pc'
}

export default () => {
  const [state, setState] = useState({
    pageUrl: pageUrl,
    windowType: isMobile() ? WindowType.mobile : WindowType.pc
  })

  const [iframeState, setIframeState] = useState({
    width: 375,
    height: 667,
  })

  useEffect(() => {
    const handleResize = _throttle(() => {
      setState(c => ({ ...c, windowType: isMobile() ? WindowType.mobile : WindowType.pc }))
    }, 300)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (state.windowType === WindowType.mobile) {
    return <iframe src={state.pageUrl} />
  }

  return (
    <div className={css.preview}>
      <div className={css.toolbar}>
        <input className={css.searchBar} value={state.pageUrl}></input>
      </div>
      <div className={css.container}>
        <div className={css.left}>
          <SizeConfig value={iframeState} onChange={v => setIframeState(v)} />
          <div
            className={css.mobile}
            style={{
              width: iframeState.width,
              height: iframeState.height,
            }}
          >
            <iframe src={state.pageUrl} />
          </div>
        </div>
        <div className={css.right}>
          <Block title={'页面地址'}>
            <div className={`${css.text} ${css.link}`} onClick={() => window.open(state.pageUrl)}>{state.pageUrl}</div>
          </Block>
          <Block title={'页面二维码'}>
            <QRCodeCanvas content={state.pageUrl} style={{ marginTop: 10 }} />
          </Block>
        </div>
      </div>
    </div>
  )
}


function isMobile () {
    return navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
}