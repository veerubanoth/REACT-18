

function PassingEventHanlersAsProps({ onclick, children }) {
   return (
      <button onClick={onclick}>
         {children}
      </button>
   )
}