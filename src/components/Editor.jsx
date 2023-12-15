import React, { useState } from "react";

const Editor = () => {
  const [text, setText] = useState('');

  return (
    <div>
      
      <textarea
        cols="10"
        rows="10"
        className="textarea"
        placeholder="write..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <div className="preview">
        <div className="loading">{text}</div></div>
    </div>
  );
};

export default Editor;
