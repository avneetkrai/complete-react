import React, { Component } from 'react';

class ClassClick extends Component {
  clickHandler() {
    console.log('class button clicked');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Class Button</button>
      </div>
    );
  }
}

export default ClassClick;
