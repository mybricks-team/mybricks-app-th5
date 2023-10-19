import React, { useMemo, useCallback, useRef, useEffect, useState } from 'react'
import { Input } from 'antd'
import css from './index.less'

const DeleteIcon = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="delete"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
    </svg>
  )
}

const Item = ({ value, onChange, onDelete, isEdit }) => {
  const [itemState, setItemState] = useState(value ?? {})

  // const TypeRender = useMemo(() => {
  //   return (
  //     <div className={css.type}>
  //       <select name="select" onChange={v => setState(c => ({ ...c, type: v.target.value }))}>
  //         <option value="string">字符</option>
  //         <option value="boolean">布尔</option>
  //         <option value="number">数字</option>
  //       </select>
  //     </div>
  //   )
  // }, [value.type, onChange])

  useEffect(() => {
    onChange?.(itemState)
  }, [itemState])

  if (!isEdit) {
    return (
      <div className={`${css.item} ${css.itemEdit}`}>
        <div className={css.key}>{itemState.key}</div>
        <div className={css.value}>{itemState.value}</div>
      </div>
    )
  }

  return (
    <div className={css.item}>
      <div className={css.key}>
        <input value={itemState.key} type="text" placeholder="参数名" onChange={v => setItemState(c => ({ ...c, key: v.target.value }))} />
      </div>
      {/* {TypeRender} */}
      <div className={css.value}>
        <input value={itemState.value} type="text" placeholder="参数值" onChange={v => setItemState(c => ({ ...c, value: v.target.value }))}  />
      </div>
      <div className={css.delete} onClick={onDelete}>
        <DeleteIcon />
      </div>
    </div>
  )
}

export default ({ initValue, onChange }) => {
  const [state, setState] = useState(initValue ?? [])
  const [isEdit, setIsEdit] = useState(false)

  const handleAdd = useCallback(() => {
    setState((c) => c.concat({}))
  }, [])

  const handleChange = useCallback((index, item) => {
    setState((c) => {
      if (c[index]) {
        c[index] = item
        return Array.from(c)
      }
      return c.concat(item)
    })
  }, [])

  const handleDelete = useCallback((index) => {
    setState((c) => {
      c.splice(index, 1)
      return [...c]
    })
  }, [])

  // 展示和存储的时候过滤不需要的函数
  const getValidValues = useCallback((state) => {
    return state.filter(t => t.key && t.value);
  }, [])

  const showStates = useMemo(() => {
    return isEdit ? state : getValidValues(state)
  }, [isEdit, state])


  return (
    <div className={css.param}>
      <div className={css.head}>
        埋点参数
        <div className={css.btn} onClick={() => setIsEdit((c) => {
          if (c) {
            const validValues = getValidValues(state)
            onChange?.(validValues)
          }
          return !c
        })}>
          {isEdit ? '完成' : '编辑'}
        </div>
      </div>
      <div className={css.body}>
        {Array.isArray(showStates) && showStates.length ? (
          showStates.map((item, index) => {
            return (
              <Item
                value={item}
                onChange={v => handleChange(index, v)}
                onDelete={() => handleDelete(index)}
                isEdit={isEdit}
              />
            )
          })
        ) : (
          <div className={css.placeholder}>请先编辑参数</div>
        )}
      </div>
      {isEdit && (
        <div className={css.add}>
          +{' '}
          <span className={css.text} onClick={handleAdd}>
            添加
          </span>
        </div>
      )}
    </div>
  )
}
