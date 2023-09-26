import React, { memo, useState, useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import styles from './index.less';

const DEFAULT = `// 输入代码`;

export default ({ style, language = 'html', defaultValue = DEFAULT, value, onChange }) => {
  // const [language, setLanguage] = useState("html");
  const editorEleRef = useRef(null);
  const editorRef = useRef(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editorEleRef.current) {
      editorRef.current = monaco.editor.create(editorEleRef.current, {
        value: value ?? defaultValue,
        language,
        minimap: {
          enabled: false,
        },
      });
    }

    return () => {
      editorRef.current.dispose();
    };

  }, [editorEleRef]);
  
  // useEffect(() => {
  //   // 切换语言
  //   // monaco.editor.setModelLanguage(
  //   //   monaco.editor.getModels()[0],
  //   //   language
  //   // );
  // }, [language])

  useEffect(() => {
    // 监听文本内容变化
    const changer = editorRef.current.onDidChangeModelContent(
      (value) => {
        setContent(editorRef.current.getValue())
      }
    );
    return () => {
      changer.dispose();
    };
  }, []);

  useEffect(() => {
    console.log('content', content)
    onChange?.(content)
  }, [content])

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.editor} ref={editorEleRef}>
      </div>
    </div>
  )
}