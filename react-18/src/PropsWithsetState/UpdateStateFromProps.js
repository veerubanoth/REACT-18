import React, { useState } from 'react';
const newUsers = [
   {
      id: '1',
      name: 'Rahul 1',
   },
   {
      id: '2',
      name: 'Rahul 2',
   },
   {
      id: '3',
      name: 'Rahul 3',
   },
];

function AppNew() {
   const [users, setUsers] = useState(newUsers);

   return (
      <div>
         <h1>Derive State from Props in React</h1>

         <List list={users} />
      </div>
   );
}

function List({ list }) {
   return (
      <ul>
         {list.map((item) => (
            <Item key={item.id} item={item} />
         ))}
      </ul>
   );
}

function Item({ item }) {
   return (
      <li>
         <span>{item.name}</span>
      </li>
   );
}

export default AppNew;