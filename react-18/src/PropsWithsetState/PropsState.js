import React, { useState } from 'react'

function PropsState() {
   const [title, handleTitle] = useState('Good Morning');

   return (
      <div>
         <h1>{title}</h1>
         <button onClick={() => handleTitle("Good Evenning")}>change</button>
      </div>
   )
}

export default PropsState;