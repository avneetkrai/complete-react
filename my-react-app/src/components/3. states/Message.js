import React, { Component } from 'react';

class Message extends Component {
  //   constructor(props) {
  //     super(props);
  //     // constructor() {
  //     //     super(props);
  //     //     super(); https://www.geeksforgeeks.org/whats-the-difference-between-super-and-superprops-in-react/
  //     console.log("1",this.props);
  //     console.log("2",props)
  //   }
  constructor() {
    super();
    this.state = {
      message: 'vistor',
    };
  }
  changeMessage(){
    this.setState({
        message: "thank you for subscribing"
    })
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
