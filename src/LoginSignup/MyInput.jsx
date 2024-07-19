import React, { useState, useRef, useEffect } from "react";

function MyInput() {
  const [htmlContent, setHtmlContent] = useState("");
  const inputRef = useRef(null);

  const setCaretToEnd = (el) => {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
  };

  const handleInput = () => {
    const value = inputRef.current.innerText;
    let newHtmlContent = "";
    let lastColor = "black";

    for (let i = 0; i < value.length; i++) {
      if (value[i] === "#") {
        lastColor = "blue";
      } else if (value[i] === " " && lastColor === "blue") {
        lastColor = "black";
      }
      newHtmlContent += `<span style="color:${lastColor}">${value[i]}</span>`;
    }

    setHtmlContent(newHtmlContent);
  };

  useEffect(() => {
    setCaretToEnd(inputRef.current);
  }, [htmlContent]);

  return (
    <div className="m-5">
      <div>
        <label htmlFor="text">Color Input</label> <br />
        <div
          ref={inputRef}
          className="p-3 border"
          contentEditable
          onInput={handleInput}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{ whiteSpace: "pre-wrap", outline: "none" }}
        ></div>
      </div>
    </div>
  );
}

export default MyInput;
