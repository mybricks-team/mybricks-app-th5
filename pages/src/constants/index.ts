export const COOKIE_LOGIN_USER = "mybricks-login-user";

/** 发布时使用，根据 edit 获取 rt 资源 */
export const PC_COMMON_MAP = {

}

export const MySelf_COM_LIB = {
  comAray: [],
  id: '_myself_',
  title: '我的组件',
  defined: true,
};

// 本地组件库的ID，不支持物料中心查询
export const LOCAL_COM_LIB_ID = '';

export const H5_BASIC_COM_LIB = {
  id: LOCAL_COM_LIB_ID,
  namespace: "mybricks.normal-h5-comlib.vue",
  editJs: './public/comlibs/0.0.14/edit.js',
  // editJs: 'https://tx-ec.static.yximgs.com/kos/nlav11092/comlibs/mybricks.normal-h5/202309211729/edit.js',
  rtJs: './public/comlibs/0.0.14/rt.js',
  // rtJs: 'https://tx-ec.static.yximgs.com/kos/nlav11092/comlibs/mybricks.normal-h5/202309211729/rt.js',
  coms: './public/comlibs/0.0.14/rtCom.js',
  version: '0.0.14'
}

export const LOCAL_EDITOR_ASSETS = {
  expression: {
    CDN: {
      codemirror: '/mfs/editor_assets/codemirror/codemirror_1.0.13_index.min.js'
    }
  },
  richtext: {
    CDN: {
      tinymce: '/mfs/editor_assets/richText/tinymce/5.7.1/tinymce.min.js',
      language: '/mfs/editor_assets/richText/tinymce/5.7.1/zh_CN.js',
    }
  },
  align: {
    CDN: {
      left: '/mfs/editor_assets/align/left.defc4a63ebe8ea7d.svg',
      rowCenter: '/mfs/editor_assets/align/center.c284343a9ff9672a.svg',
      right: '/mfs/editor_assets/align/right.a7763b38b84b5894.svg',
      top: '/mfs/editor_assets/align/top.98906024d52b69de.svg',
      columnCenter: '/mfs/editor_assets/align/center.100376f4ade480cd.svg',
      bottom: '/mfs/editor_assets/align/bottom.6ee532067ed440ca.svg',
      column: '/mfs/editor_assets/align/column-space-between.31d560c0e611198f.svg',
      row: '/mfs/editor_assets/align/row-space-between.ead5cd660c0f1c33.svg',
    }
  },
  array: {
    CDN: {
      sortableHoc: '/mfs/editor_assets/react-sortable/react-sortable-hoc-2.0.0_index.umd.min.js'
    }
  },
  expcode: {
    CDN: {
      prettier: {
        standalone: '/mfs/editor_assets/prettier/2.6.2/standalone.js',
        babel: '/mfs/editor_assets/prettier/2.6.2/parser-babel.js'
      },
      eslint: '/mfs/editor_assets/eslint/8.15.0/eslint.js',
      paths: {
        vs: "/mfs/editor_assets/monaco-editor/0.33.0/min/vs",
      },
      monacoLoader: '/mfs/editor_assets/monaco-editor/0.33.0/min/vs/loader.min.js'
    }
  },
  csseditor: {
    CDN: {
      prettier: {
        standalone: '/mfs/editor_assets/prettier/2.6.2/standalone.js',
        babel: '/mfs/editor_assets/prettier/2.6.2/parser-babel.js'
      },
      eslint: '/mfs/editor_assets/eslint/8.15.0/eslint.js',
      paths: {
        vs: "/mfs/editor_assets/monaco-editor/0.33.0/min/vs",
      },
      monacoLoader: '/mfs/editor_assets/monaco-editor/0.33.0/min/vs/loader.min.js'
    }
  },
  stylenew: {
    CDN: {
      prettier: {
        standalone: '/mfs/editor_assets/prettier/2.6.2/standalone.js',
        babel: '/mfs/editor_assets/prettier/2.6.2/parser-babel.js'
      },
      eslint: '/mfs/editor_assets/eslint/8.15.0/eslint.js',
      paths: {
        vs: "/mfs/editor_assets/monaco-editor/0.33.0/min/vs",
      },
      monacoLoader: '/mfs/editor_assets/monaco-editor/0.33.0/min/vs/loader.min.js'
    }
  },
  code: {
    CDN: {
      prettier: {
        standalone: '/mfs/editor_assets/prettier/2.6.2/standalone.js',
        babel: '/mfs/editor_assets/prettier/2.6.2/parser-babel.js'
      },
      eslint: '/mfs/editor_assets/eslint/8.15.0/eslint.js',
      paths: {
        vs: "/mfs/editor_assets/monaco-editor/0.33.0/min/vs",
      },
      monacoLoader: '/mfs/editor_assets/monaco-editor/0.33.0/min/vs/loader.min.js'
    }
  }
}


export const USE_CUSTOM_HOST = '__USE_CUSTOM_HOST__'