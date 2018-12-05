import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/styles/hljs/docco';

console.log(SyntaxHighlighter);

const CodeBlock = ({ value }) => (
  <div>
    <SyntaxHighlighter language="r" style={style}>{ value }</SyntaxHighlighter>
  </div>
)
export default CodeBlock;
