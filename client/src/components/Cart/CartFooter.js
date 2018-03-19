import React from 'react';

const CartFooter = (props) => {
  const { avatar, author, time } = props;

  return (
    <div className="cart-footer">
      <div className="avatar" style={{ backgroundImage: `url(${avatar})` }} />
      <div className="post-info">
        <p className="auth-name">{author}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
};

export default CartFooter;
