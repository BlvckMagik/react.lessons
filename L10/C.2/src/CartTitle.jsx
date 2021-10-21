import React from 'react';

const CartTitle = ({ count, userName }) => {
  return (
    <div class='cart-title'>{`${userName}, you added ${count} items`}</div>
  );
};

export default CartTitle;
