import React from "react";

function Item({ name, isPacked }) {
   if (isPacked) {
      return <li>{name} ✔</li>
   } else
      return <li> {name} </li>
}


export default function PackingList() {
   return (
      <section>
         <h1>Packing List</h1>
         <ul>
            <Item name="veeru" isPacked={true} />
            <Item name="banoth" isPacked={false} />
            <Item name="mobile" isPacked={true} />
            <Item name="web" isPacked={false} />
         </ul>
      </section>
   )
}