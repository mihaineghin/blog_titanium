import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PostCart from '../PostPage/PostCart';

import CartFooter from './CartFooter';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      postData: '',
      multiplePosts: true
    }
  }

  handlePostId = () => {
    axios.post(`/api/posts/${this.props._id}`, this.props)
      .then((res) => {
        // console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      // (if (this.state.singlePost))

      <div>
        <Link className="cart-style" to={'/posts/' + this.props.urlKey} onClick={this.handlePostId} >
          <div className="cart-item">
            <div className="cart-title" style={{ backgroundImage: `url(../../../../${this.props.cartImage})` }}>
              <p>{this.props.title}</p>
            </div>
            {
              this.props.moto && <div className="description">
                <p>
                  {this.props.moto}
                </p>
              </div>
            }
            <CartFooter avatar={this.props.avatarImage} author={this.props.author} />
          </div>
        </Link >
      </div>

    )
  }
}
