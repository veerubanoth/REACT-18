import React from 'react';

function Expenses(props) {
   return (
      <div>
         <h1 className='text-red-800'>List of Items</h1>
         {props.items.map((item) => (
            <>
               <li className='text-red-500 '>{item.name}</li>
               <li>{item.amount}</li>
            </>
         ))}

      </div>
   )
}
export default Expenses;