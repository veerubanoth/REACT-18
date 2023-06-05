import React, { Component } from 'react';
import getMessages from './getMessages';

class Inbox extends Component {
   state = {
      messages: []
   };

   componentDidMount = async () => {
      const fetchMessages = await getMessages();
      this.setState({
         messages: fetchMessages
      });
   };

   render() {
      return (
         <ul className="message-list">
            {
               this.state.messages.length !== 0
                  ? this.state.messages.map((m) => <li key={m.id}>{m.message}</li>)
                  : "Loading Data..."
            }
         </ul>
      );
   }
}

export default Inbox;
