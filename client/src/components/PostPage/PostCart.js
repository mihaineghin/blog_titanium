import React from 'react';
import CartFooter from '../Cart/CartFooter';

const PostCart = props =>
  (
    <div className="cart-style detail-post">
      <div className="cart-item">
        {props.children}
        <div className="cart-title" style={{ backgroundImage: `url(../../../../${props.cartImage})` }}>
          <p>{props.title}</p>
        </div>
        <CartFooter avatar={props.avatarImage} author={props.author} />
        {
          props.description &&
          <div className="description ">
            <p className="cart-text">
              {props.description}
            </p>
          </div>
        }
      </div>
    </div>
  );


export default PostCart;
