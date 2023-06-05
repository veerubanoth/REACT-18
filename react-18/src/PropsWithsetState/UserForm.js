import React, { useState } from 'react'

function UserForm() {
   const initialObject = {
      username: "",
      password: "",
   }
   const [user, setUser] = useState();

   function handleChange(e) {
      setUser({ ...user, [e.target.name]: e.target.value, })
   }

   return (
      <>
         <h3> UseState with object Type</h3>
         <p>{JSON.stringify(user)}</p>

         <form>
            <label>Username: {" "}
               <input type="text" name='username' onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>Password: {" "}
               <input type="text" name='Password' onChange={handleChange} />
            </label>
         </form>

      </>
   )
}

export default UserForm;