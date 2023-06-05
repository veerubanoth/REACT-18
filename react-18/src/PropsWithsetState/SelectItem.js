import React, { useState } from 'react';

const initialItems = [
   { title: 'Mango', id: 0 },
   { title: 'Banana', id: 1 },
   { title: 'Orange', id: 2 },
];

function SelectItem() {
   const [items, setItems] = useState(initialItems);
   const [selectedItem, setSelectedItem] = useState(items[0]);

   return (
      <>
         <h2>Select Item</h2>
         <ul>
            {items.map(item => (
               <li key={item.id}>{item.title} {" "}
                  <button onClick={() => { setSelectedItem(item) }}>Select</button></li>
            ))}
         </ul>
         <p>You have selected: {selectedItem.title}</p>
      </>
   )
}

export default SelectItem