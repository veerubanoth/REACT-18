//~% The 'Updating Phase' occurs when we interact with the component & it re-renders.

//~> 1. getDerivedStateFromProps() Method.
//~> 2. shouldComponentUpdate().

//~> 1. getDerivedStateFromProps() Method.
//> changes in props or changes in state.
//~% Updating phase begins with an invocation getDerivedStateFromProps() methods
//# When implemented this method allows us to decide whether u want state to be updated
//# or Not, based on chages to data in the props.
//> When getDerivedStateFromProps() is called in the Mounting Phase, it can be used to set
//> state variables based on the data in the props.
//# The next time getDerivedStateFromProps() method is called in the "Updating" phase,
//# we can compare the data in the state with that in the props & we can update the state if neede.
//> This helps implement state changes that well occur only if the data in the props differs from
//> what it was earlier.

//~% Every update to the parent component brings about an updat to child components too,
//~% even if the data in the props continues to be the same.
//~! You may not want the state to be updated if the incoming data is the same.


//~> 2. shouldComponentUpdate().
