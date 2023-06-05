import React, { useState } from "react";

//~! Knowledge Hut Example - Statul funcion components with Hooks

const CodeInput = ({ onSet }) => {
   const [code, setCode] = useState();
   const onSetCode = val => {
      onSet(val);
      setCode(val);
   };
   return (
      <div className="code-input">
         <input
            type="text"
            value={code}
            onChange={e => onSetCode(e.target.value)}
         />
         <button onClick={() => onSetCode(parseInt(Math.random() * 100000000))}>
            Generate
         </button>
      </div>
   );
};

export default CodeInput;