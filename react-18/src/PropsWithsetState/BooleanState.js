import React, { useState } from 'react'

function BooleanState() {
   const [isLoading, setLoading] = useState(true);

   return (
      <>
         <h3> UseState with Boolean Type</h3>
         {isLoading ? <p>Still Loading...</p> : <h3>Data is Here</h3>}
         <button onClick={() => setLoading((prevState) => !prevState)}>
            Loading...
         </button>

      </>

   )
}

export default BooleanState;