import React from 'react';

const NewExpenseItem = (props) => {
   return (
      <div>
         <h1>
            {props.name}
         </h1>
         <h2>{props.amount}</h2>
      </div>
   )
}

export default NewExpenseItem;