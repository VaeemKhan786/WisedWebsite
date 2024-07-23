// import React, { useState, useRef, useEffect } from "react";

// function MyInput() {
//   const [htmlContent, setHtmlContent] = useState("");
//   const inputRef = useRef(null);

//   const setCaretToEnd = (el) => {
//     const range = document.createRange();
//     const sel = window.getSelection();
//     range.selectNodeContents(el);
//     range.collapse(false);
//     sel.removeAllRanges();
//     sel.addRange(range);
//     el.focus();
//   };

//   const handleInput = () => {
//     const value = inputRef.current.innerText;
//     let newHtmlContent = "";
//     let lastColor = "black";

//     for (let i = 0; i < value.length; i++) {
//       if (value[i] === "#") {
//         lastColor = "blue";
//       } else if (value[i] === " " && lastColor === "blue") {
//         lastColor = "black";
//       }
//       newHtmlContent += `<span style="color:${lastColor}">${value[i]}</span>`;
//     }

//     setHtmlContent(newHtmlContent);
//   };

//   useEffect(() => {
//     setCaretToEnd(inputRef.current);
//   }, [htmlContent]);

//   return (
//     <div className="m-5">
//       <div>
//         <label htmlFor="text">Color Input</label> <br />
//         <div
//           ref={inputRef}
//           className="p-3 border"
//           contentEditable
//           onInput={handleInput}
//           dangerouslySetInnerHTML={{ __html: htmlContent }}
//           style={{ whiteSpace: "pre-wrap", outline: "none" }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default MyInput;
import React, { useState, useEffect } from "react";

export default function MyInput() {
  const [data, setData] = useState([]);


  // Fetch API
  useEffect(() => {
    fetch("http://www.wised.in/api/v1/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "vivek7@gmail.com",
        password: "ZAQzaq#321",
      }),
    })
      .then((res) => {
        
        return res.json();
      })
      .then((resp) => {
        if (Array.isArray(resp)) {
          setData(resp);
        } 
      })
      
  }, []);

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <h1>{item.message}</h1>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}


