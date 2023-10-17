import React, { useEffect, useRef, useState } from "react";
import css from "./burialPoint.less";
import { PlusOutlined, RemoveOutlined } from "./pl-icon";
import mock from "./Mock/MockBurialPoint";
import { Button, message } from "antd";

export default function BurialPoint(props) {
  const { data, designerRef, appData } = props;
  const [trackPointAry, setTrackPointAry] = useState(data.trackPointAry);
  let burialPointComAry = mock();

  const addClick = () => {
    appData.openUrl({
      url: "MYBRICKS://mybricks-material/materialSelectorPage",
      params: {
        title: "选择埋点方案",
        type: "spm",
        config: { pure: true },
        // defaultSelected: data.themes
      },
      onSuccess: async ({ materials }) => {
        let content = materials[0].content
        content = decodeURIComponent(content);
        content = JSON.parse(content);
        materials[0].content = content;
        console.log("materials", materials[0]);
        setTrackPointAry(materials[0]);
      },
    });
  };

  const handleBlur = (e) => {
    const updatedValue = e.target.value;
    const keyToUpdate = e.target.dataset.title;

    if (trackPointAry && trackPointAry.pageEnv) {
      setTrackPointAry((prevState) => ({
        ...prevState,
        pageEnv: {
          ...prevState.pageEnv,
          [keyToUpdate]: updatedValue,
        },
      }));
    }
  };

  useEffect(() => {
    console.log("trackPointAry", trackPointAry);
    data.trackPointAry = trackPointAry;
  }, [trackPointAry]);

  return (
    <div>
      <div className={css.view}>
        <div className={css.header}>
          <div>埋点方案配置</div>
          <div
            className={css.icon}
            data-mybricks-tip="添加埋点方案"
            onClick={() => {
              addClick();
            }}
          >
            {PlusOutlined}
          </div>
        </div>
        {/* 这里放选取之后的列表 */}
        <div className={css.selectedInfo}>
          <div className={css.contant}>
            {trackPointAry ? (
              <>
                <div className={css.title}>{trackPointAry.title}</div>

                <div className={css.item}>
                  <label>更新时间</label>
                  <div className={`${css.editor} ${css.textEdt}`}>
                    <input
                      type={"text"}
                      placeholder={""}
                      disabled={true}
                      defaultValue={new Date(
                        trackPointAry.update_time
                      ).toLocaleString()}
                      key={""}
                      data-title={""}
                    />
                  </div>
                </div>

                <div className={css.item}>
                  <label>创建人</label>
                  <div className={`${css.editor} ${css.textEdt}`}>
                    <input
                      type={"text"}
                      placeholder={""}
                      disabled={true}
                      defaultValue={trackPointAry.creator_name}
                      key={""}
                      data-title={""}
                    />
                  </div>
                </div>
                {Object.keys(trackPointAry.content.pageEnv).map(
                  (key, index) => {
                    return (
                      <div className={css.item}>
                        <label>{key}</label>
                        <div className={`${css.editor} ${css.textEdt}`}>
                          <input
                            type={"text"}
                            placeholder={""}
                            defaultValue={
                              trackPointAry
                                ? trackPointAry.content.pageEnv[key]
                                : ""
                            }
                            key={index}
                            data-title={key}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>
                    );
                  }
                )}
                <div className={css.btnBox}>
                  <Button
                    onClick={() => {
                      setTrackPointAry(null);
                      message.success("删除成功");
                    }}
                    type="default"
                    style={{
                      marginTop: 12,
                      marginRight: 5,
                      width: "80px",
                      height: "30px",
                      fontSize: "12px",
                    }}
                  >
                    删除方案
                  </Button>
                  <Button
                    onClick={() => {
                      message.success("保存成功");
                    }}
                    type="primary"
                    style={{
                      marginTop: 12,
                      width: "70px",
                      height: "30px",
                      fontSize: "12px",
                    }}
                  >
                    保存
                  </Button>
                </div>
              </>
            ) : (
              <>
                <img
                  className={css.img}
                  src="http://my.mybricks.world/mfs/files/1697443385246/e2XETMYyEJ3iBu8GXTjgIKQE4IXrI92A-1697443385560.png"
                  alt=""
                />
                <div className={css.text}>
                  当前未选择方案，请点击右上角+进行选择
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
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
