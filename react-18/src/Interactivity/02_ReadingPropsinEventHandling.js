import React from 'react';

const ReadingPropsinEventHandling = ({ message, children }) => {
   return (
      <button onClick={() => { alert(message) }}>{children}</button>

   )
}

export default ReadingPropsinEventHandling;