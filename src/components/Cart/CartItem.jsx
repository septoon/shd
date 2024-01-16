import React from 'react';

const CartItem = ({
  id,
  image,
  name,
  activeSize,
  price,
  count,
  onClickRemovePizza,
}) => {
  
  const onRemovePizza = () => {
    const pizzaObj = {
      pizzaId: id,
      pizzaSize: activeSize,
    };
    onClickRemovePizza(pizzaObj);
  };
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src="" alt={name} />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>{activeSize}</p>
      </div>
      <div className="cart__item-count">
        <b>{count}шт.</b>
      </div>
      <div className="cart__item-price">
        <b>{price}₽</b>
      </div>
      <div className="cart__item-remove">
        <div className="button button--outline button--circle" onClick={onRemovePizza}>
          <img src='' className="close-cart svg" alt="closeCart" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
