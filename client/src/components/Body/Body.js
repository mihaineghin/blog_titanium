import React, { Component } from 'react';

class Body extends Component {
  render() {
    const carts = this.props.children;
    return (
      <div className="main-container">
        <div className="carts-container">
          {[carts]}
        </div>
      </div>
    )
  }
}

export default Body