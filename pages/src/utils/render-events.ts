export const events = [
  {
    type: 'jump',
    title: '跳转',
    exe({ options }) {
      window.location.href = options.url;
      // let handledUrl = getIdcAvailUrl(options.url);
      // openPage(handledUrl, env.yoda, true);
    },
    options: [
      {
        id: 'url',
        title: '地址',
        editor: 'textarea',
      },
    ],
  },
  {
    type: 'back',
    title: '返回上一级',
    exe() {
      window.history.back();
    },
  },
];