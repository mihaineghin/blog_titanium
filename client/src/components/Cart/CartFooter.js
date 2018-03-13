import React from 'react';

const CartFooter = (props) => {
  const { avatar, author } = props;

  return (
    <div className="cart-footer">
      <div className="avatar" style={{ backgroundImage: `url(${avatar})` }} />
      <div className="post-info">
        <p className="auth-name">{author}</p>
        <p className="time">2 days ago</p>
      </div>
    </div>
  );
};

export default CartFooter;
