import React, { Component } from "react";
import App from "../App";


export default class Notification extends Component {

   render() {
      return (
         <div >
            <div>
               <img src={this.props.imgLike} alt="" />
               <h1>{this.props.title}</h1>
            </div>
            <div>
               <p> {this.props.description}</p>

            </div>
            <div>
               <img src={this.props.imgTitle} alt="prifilePic" />
               <div>
                  <img src={this.props.imgLike} alt="likebutton" />
                  <img src={this.props.imgPop} alt="pop" />
                  <img src={this.props.imgShare} alt="share" />
               </div>
            </div>
            <input type="Type a comment..." />

         </div>
      )
   }
}

