import React from 'react';
import ButtonClick from './Interactivity/01_RespondingToEvent'
import ReadingPropsinEventHandling from './Interactivity/02_ReadingPropsinEventHandling';



function App() {
  return (
    <div>
      <ButtonClick />
      <br />
      <ReadingPropsinEventHandling message={"uploading"} > upload</ReadingPropsinEventHandling>
      <ReadingPropsinEventHandling message={"playing"} > play</ReadingPropsinEventHandling>


    </div>
  )
}
export default App;
