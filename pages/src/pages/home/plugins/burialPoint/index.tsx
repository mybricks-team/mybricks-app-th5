import { Icon } from "./Icons";
import BurialPoint from "./burialPoint";
import data from "./data";

export const burialPoint = ({ designerRef, sdk, onIsSelect }) => {
  return {
    name: "@mybricks/plugins/trackPoint",
    title: "埋点绑定插件",
    author: "MoYukai",
    ["author.zh"]: "莫煜楷",
    version: "1.0.0",
    description: "埋点绑定插件",
    data,
    contributes: {
      sliderView: {
        tab: {
          title: "埋点编辑",
          icon: Icon,
          apiSet: [],
          render(args) {
            const props = { ...args, designerRef, sdk };
            //View渲染
            return <BurialPoint {...props} onIsSelect={onIsSelect} />;
          },
        },
      },
    },
    activate({ data }) {
      onIsSelect?.({ isSelectPlan: data?.trackPointAry?.content && data?.trackPointAry?.id })
    },
    toJSON: ({ data }) => {
      return JSON.parse(JSON.stringify(data?.trackPointAry ?? {}));
    },
    beforeDump(args) {
      //当dump总体数据时回调（保存）
      //debugger
    },
  };
};
