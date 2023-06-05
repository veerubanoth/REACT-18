import React, { useState } from 'react';

function FromsInput({ nameVal, natureVal, queryVal }) {
   const [name, setName] = useState(nameVal);
   const [nature, setNature] = useState(natureVal);
   const [query, setQuery] = useState(queryVal);

   return (
      <div>
         <div >
            <div >
               <span >Name</span>
               <input onChange={e => setName(e.target.value)} />
            </div>
            <div>
               <span>Nature of Query</span>
               <select onChange={e => setNature(e.target.value)}>
                  <option>Billing</option>
                  <option>Sales</option>
                  <option>Tech Support</option>
               </select>
            </div>
            <div>Query</div>

            <textarea onChange={e => setQuery(e.target.value)} />
         </div>
         <div>
            <div>Name: {name}</div>
            <div>Nature of Query:{nature}</div>
            <div>Query: {query}</div>

         </div>
      </div>
   )
}

export default FromsInput