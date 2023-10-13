import React, { useEffect, useRef, useState } from "react";
import css from "./burialPoint.less";
import viewStyle from "./view.less";
import useStyle from "./index.less";
import classNames from "classnames";
import { PlusOutlined, RemoveOutlined } from './pl-icon'
import { Drawer, Input, Button, Radio } from "antd";

export default function BurialPoint(props) {
  const { TextArea } = Input;
  const { data, designerRef } = props;
  const [Ary, setAry] = useState([]);
  const [pageCode, setPageCode] = useState();
  const [pageCodeTitle, setPageCodeTitle] = useState("pageCode");
  const [drawerShow, setDrawShow] = useState(false);
  const [editItem, setEditItem] = useState<any>({});
  const [editEvent, setEditEvent] = useState<any>([]);
  const [targetEventKeyValues, setTargetEventKeyValues] = useState({});
  const [comInstanceTrack, setComInstanceTrack] = useState(data.comInstanceTrack);

  let burialPointComAry = {
    pageEnv: {
      pageCode: "",
    },
    pageHooks: {
      initial:
        "<script>\n  window.aplus = {\n    record: (params) => {\n      console.warn('SDK携带的环境参数', window.mybricks_track?.pageCode);\n      console.warn('我是SDK上报的参数', params);\n    }\n  }\n</script>",
    },
    comTrackPoints: {
      "mybricks.normal-vue.button": {
        btn_active: {
          title: "按钮点击",
          func: "\n            function  __com_track_def__  ({ point, title, type, namespace }, extra) {\n              aplus.record({\n                point,\n                title,\n              })\n            }\n          ",
        },
        btn_expose: {
          title: "按钮曝光",
          func: "\n            function  __com_track_def__  ({ point, title, type, namespace }, extra) {\n              aplus.record({\n                point,\n                title,\n              })\n            }\n          ",
        },
      },
    },
  };

  const [comAry, setComAry] = useState(
    designerRef.current.components.getAll()[0].comAry
  );

  const comFilter = (comAry, burialPointComAry) => {
    let newComAry = [];
    const trackPointKeys = Object.keys(burialPointComAry.comTrackPoints);
    for (let i = 0; i < comAry.length; i++) {
      if (trackPointKeys.includes(comAry[i].def.namespace)) {
        newComAry.push(comAry[i]);
      }
    }
    return newComAry;
  };

  function getEventTitlesByNamespace(data, namespace) {
    const events = data.comTrackPoints[namespace];
    if (!events) {
      return [];
    }

    const result = [];

    for (const [eventName, eventData] of Object.entries(events)) {
      result.push({
        event: eventName,
        title: eventData.title,
      });
    }

    return result;
  }

  function generateComInstanceTrack(
    key,
    targetEventKeyValues,
    title,
    namespace,
    jsonData
  ) {
    const result = {
      [key]: {},
    };

    for (const [eventName, eventData] of Object.entries(
      jsonData.comTrackPoints[namespace]
    )) {
      result[key][eventName] = {
        common: {
          title: title,
          namespace: namespace,
        },
        extra: targetEventKeyValues[eventName] || {}, // 添加指定的键值对，如果没有则默认为空对象
      };
    }

    return result;
  }

  // 更新或添加到埋点实例化列表
  const updateOrAddToComInstanceTrack = (key: string, value: any) => {
    setComInstanceTrack((prevState) => {
      if (prevState[key]) {
        // 如果键已经存在，更新这个键的值
        return {
          ...prevState,
          [key]: {
            ...prevState[key],
            ...value,
          },
        };
      } else {
        // 如果键不存在，添加新的键值对
        return {
          ...prevState,
          [key]: value,
        };
      }
    });
  };

  //初始化，过滤出有埋点的组件
  useEffect(() => {
    let newArry = comFilter(comAry, burialPointComAry);
    setAry(newArry);
    setPageCodeTitle(Object.keys(burialPointComAry.pageEnv)[0]);
  }, []);

  const pageCodeChange = (code) => {};

  //对单个组件点击完成后，写入最终的埋点实例化列表（新增/更新）
  const editComplete = () => {
    const output = generateComInstanceTrack(
      editItem.id,
      targetEventKeyValues,
      editItem.def.title,
      editItem.def.namespace,
      burialPointComAry
    );
    console.log(output);
    updateOrAddToComInstanceTrack(editItem.id, output[editItem.id]);
    // setTargetEventKeyValues({})
  };

  //event修改，自动保存到targetEventKeyValues
  const TAChange = (e) => {
    console.log(e);
    const event = e.target.dataset.event;
    const value = e.target.value;
    setTargetEventKeyValues((prevState) => ({
      ...prevState,
      [event]: value,
    }));
  };

  useEffect(() => {
    console.log("editItem", editItem);
    const event = getEventTitlesByNamespace(
      burialPointComAry,
      editItem.def.namespace
    );
    setEditEvent(event);
  }, [editItem]);

  useEffect(() => {
    console.log("editEvent", editEvent);
  }, [editEvent]);

  useEffect(() => {
    console.log("targetEventKeyValues", targetEventKeyValues);
  }, [targetEventKeyValues]);

  useEffect(() => {
    console.log("comInstanceTrack", comInstanceTrack);
    data.comInstanceTrack = comInstanceTrack;
  }, [comInstanceTrack]);

  return (
    <div className={viewStyle.view}>
      <div className={viewStyle.header}>
        埋点方案配置
      </div>
      <div className={useStyle.toolbar}>
        <div className={useStyle.search}>
          <input
            type={'text'}
            placeholder={'请输入 pagecode '}
            onChange={()=>{}}
          />
          <div className={useStyle.icon} data-mybricks-tip='添加埋点方案' onClick={()=>{}}>
            {PlusOutlined}
          </div>
        </div>
      </div>
    {/* 这里放列表 */}
    </div>

    // <div className={css.panel}>
    //   <div className={css.title}>埋点编辑</div>
    //   <div className={css.content}>
    //     <div className={css.pageCode}>
    //       编辑 {pageCodeTitle}：
    //       <input
    //         className={css.input}
    //         type="text"
    //         onChange={pageCodeChange}
    //         value={pageCode}
    //       />{" "}
    //     </div>
    //     {Ary.map((item, index) => (
    //       <div className={css.item}>
    //         <div className={css.name}>{item.title}</div>
    //         <div className={css.id}>{item.id}</div>
    //         <div
    //           className={css.btn}
    //           onClick={() => {
    //             setDrawShow(true);
    //             setEditItem(item);
    //           }}
    //         >
    //           编辑
    //         </div>
    //       </div>
    //     ))}
    //   </div>

      /* <Drawer
        title="埋点信息编辑"
        placement="left"
        closable={true}
        onClose={() => {
          setDrawShow(false);
        }}
        visible={drawerShow}
        width="450px"
      >
        <div>组件名：{editItem.title}</div>
        <div>组件ID：{editItem.id}</div>
        <div></div>
        {editEvent?.map((item, index) => (
          <div>
            <div>
              {item.title} {item.event}：
            </div>
            <TextArea
              rows={4}
              data-event={item.event}
              onChange={TAChange}
              value={targetEventKeyValues[item.event]}
            />
          </div>
        ))}

        <div
          className={css.DrawerBtn}
          onClick={() => {
            setDrawShow(false);
            editComplete();
          }}
        >
          确定
        </div>
      </Drawer> */

  );
}

const finalRes = {
  comInstanceTrack: {
    u_tCK81: {
      btn_active: {
        common: {
          title: "测试按钮1",
          namespace: "mybricks.normal-vue.button",
        },
        extra: {
          hhhhhh: "我是测试参数哈哈哈哈",
        },
      },
      btn_expose: {
        common: {
          title: "测试按钮1",
          namespace: "mybricks.normal-vue.button",
        },
        extra: {},
      },
    },
  },
};
