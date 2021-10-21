import React from 'react';

const ProductionList = ({ cartItems }) => {
  return (
    <div class='products'>
      <ul class='products__list'>
        {cartItems.map(({ id, name, price }) => (
          <li key={id} class='products__list-item'>
            <span class='products__item-name'>{name}</span>
            <span class='products__item-price'>{`$${price}`}</span>
          </li>
        ))}
      </ul>
      <div class='products__total'>{`Total: $${cartItems.reduce(
        (acc, cart) => acc + cart.price,
        0
      )}`}</div>
    </div>
  );
};

export default ProductionList;
