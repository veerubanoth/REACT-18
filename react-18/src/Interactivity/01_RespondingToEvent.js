import React from 'react';

export default function ButtonClick() {

   function handleClick() {
      return alert('Clicked me')
   }

   return (
      <>
         <div>
            <button onClick={() => { alert('new') }}>
               Inline handler
            </button>
         </div>
         <br />
         <div>
            <button onClick={handleClick}>function Hanlder</button>
         </div>
      </>

   )
}