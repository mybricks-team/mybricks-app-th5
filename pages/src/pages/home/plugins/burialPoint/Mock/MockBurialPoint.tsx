const mockData = () => {
    return {
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
      }
}

export default mockData
