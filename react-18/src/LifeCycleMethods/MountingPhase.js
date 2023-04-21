//~% Mounting Phase

//~* Mounting phase occures when a React Component instance
//~*  is created and inserted in to DOM.

//~^ To customize behaviour we have 4 Methods
//~> constructor () Method
//~> getDerivedStateFromProps() Method
//~> render() Method
//~> componentDidMount() Method

//~? constructor() Method is called before th ecomponent is Mounted into the DOM.
//~? The typical use of a constructor is to initialize local state variable & bind class methods.

//~# constructor() Method
import React, { Component } from 'react';

export default class greeting extends Component {
   constructor() {
      super(props);//# Mandatory to call super(props);
      //# Beacuse we are subclassing from the component class
      this.state = {
         //# The only place where you can initialize state using this.state to an object.
         //# These variables can then be updated using this.setState({}) in class & other lifecycle methods.
         isLoading: false,
         userName: "",
         shoppingList: []
      }
      this.onClickHandler = this.onClickHandler.bind(this);
      //# Binding methods to the context of the class.
   }
}
//~! Usage of constructor can be avoided, when class fields declaration syntax is being used. 

class Greeting extends Component {
   state = {
      isLoading: false,
      userName: "",
      shoppingList: []
   };
   onClickHandler = () => { }
}

//~# getDerivedStateFrom() Method
//# Allows us to perform state changes on the basis of data in the props.
//# This method is invoked every time a parend component re-renders.


//~> render() Method
//^ Render method specifically is only needed if you're building class components and 
//^ its purpose is to return React elements.

class Card extends Component {
   state = {
      fullName: "Johnny Doe",
      designation: "VP-Sales"
   };
   render() {//==> it's purpose to return React Elements.
      //# Render Method should stay pure & must never modify the state &
      //# should always return the same and predictable result.
      return <div>
         <div>{this.state.fullName}</div>
         <div>{this.state.fullName}</div>
      </div>
   }
}

//~> componentDidMount() Method
//# This method fires where side-effects such as fetching data from an API can be
//# done before updating the state with the fetched data.



//~% UPDATING PHASE
//* This phase occures when we interact with the component and it re-renders.
//* This interaction includes recieving updated data through props or as an updated to the state.