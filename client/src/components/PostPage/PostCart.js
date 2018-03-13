import React, { Component } from 'react';
import axios from 'axios';
import CartFooter from '../Cart/CartFooter';
import EditButton from './EditButton';

class PostCart extends Component {

  state = {

  }


  render() {
    return (
      <div className="cart-style detail-post">
        <div className="cart-item">

          <EditButton />

          <div className="cart-title" style={{ backgroundImage: `url(../../../../${this.props.cartImage})` }}>
            <p>{this.props.title}</p>
          </div>
          {
            this.props.description && <div className="description">
              <p>
                {this.props.description}
              </p>
            </div>
          }
          <CartFooter avatar={this.props.avatarImage} author={this.props.author} />
        </div>
      </div>
    )
  }
}

export default PostCart;