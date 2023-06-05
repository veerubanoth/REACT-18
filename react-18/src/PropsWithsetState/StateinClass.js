import React, { Component } from 'react'

export class StateinClass extends Component {

   constructor(props) {
      super(props);
      this.state = {
         message: "Initial State",
         sub: "Click"
      }
   }
   Buttonchange = () => {
      this.setState({
         message: "State Updated",
         sub: "Clicked"
      })
   }
   render() {
      return (
         <div>
            <h3>{this.state.message}</h3>
            <button onClick={this.Buttonchange}>{this.state.sub}</button>
         </div>

      )
   }
}

export default StateinClass