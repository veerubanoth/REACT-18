import React, { useState } from 'react';

function UseStateArray() {
   const usersList = [
      { id: 1, name: "veeru" },
      { id: 2, name: "rahul" },
   ];
   const [users, setUsers] = useState(usersList);

   function updateUserList(newUser) {
      setUsers([...users, { id: users.length + 1, name: newUser }])
   }

   return (
      <>
         <h3>UseState with Array</h3>
         <form action="">
            <label>
               <input type="text" name="name" onBlur={e => updateUserList(e.target.value)} />
               <p>{JSON.stringify(users)}</p>
            </label>
         </form>
      </>

   )
}

export default UseStateArray