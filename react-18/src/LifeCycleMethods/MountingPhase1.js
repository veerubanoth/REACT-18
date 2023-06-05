//~! Mounting Phase Methods
//% When an instance of a component is being created and inserted into DOM.

//~% Constructor : 
//% It's get called whenever a new component is created, and before the component is mounted to the DOM.
//% For Initializing state.
//% Binding the event handlers.
//% Have to call special function call super(props) -> This will call base class constructor.
//% Directly overwrite this.state -->          
//% The only place where you can initialize state using this.state to an object.
//% These variables can then be updated using this.setState({}) in class & other lifecycle methods.

//~# getDerivedStateFromProps
//# Allows us to perform state changes depends on chages in props overtime.
//# Main function is to ensure that the state & props are in sync for when it's required.
//# Since this is a static method, it doesn't have access to the this key word.
//# This medthod is called or invoked before the component is rendered to the DOM on initial mount.

//~* render() method: 
//* If we want to render elements to the DOM. Eg. returning some JSX - the render method is where you would write this.  
//* The render method is the only required method in a class component, 
//* Read props and state & return JSX 
//* render method is purefunction
//* Don't attempt to use "setState" or interact with the external APIs. 
//* should always return the same and predictable result.

//~^ componentDidMount: 
//^ This method will be called only once in the whole life cycle of given component.
//^ It's invoked immediately after a component and all it's children component have been rendered to the DOM.
//^ perfect place to perform initialization that requires DOM nodes, and also data making network requests. 
//^ You would use this method to grab a DOM node from the component tree immediately after it's mounted. 
//^ Perfect place to cause Side Effects and Interact with the DOM or perform any ajax calls to load data.



import React, { Component } from 'react'

class MountingPhase1 extends Component {
   constructor(props) {
      super(props);

      this.state = {
         name: 'Rahul',
         points: 10
      }
      console.log("LifeCycleA constructor");
   }
   static getDerivedStateFromProps(props, state) {
      console.log("LifeCycleA getDerivedStateFromProps ")
      return {
         points: 1000,
         name: "Veeru"
      };
   }
   componentDidMount() {
      console.log('componentDidMount');
   }


   render() {
      console.log("renderMethod")
      return (
         <div>
            {`LifeCycleA ${this.state.points} ${this.state.name}`}
         </div>
      )
   }
}

export default MountingPhase1;