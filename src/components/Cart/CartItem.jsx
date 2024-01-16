import React from 'react';

const CartItem = ({
  id,
  image,
  name,
  serving,
  price,
  count,
  countById,
  onClickRemoveDish,
}) => {
  
  const onRemoveDish = () => {
    const dishObj = {
      dishId: id,
      serving: serving,
    };
    onClickRemoveDish(dishObj);
  };
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src="" alt="картинка" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>{serving}</p>
      </div>
      <div className="cart__item-count">
        <b>{countById}шт.</b>
      </div>
      <div className="cart__item-price">
        <b>{price}₽</b>
      </div>
      <div className="cart__item-remove">
        <div className="button button--outline button--circle" onClick={onRemoveDish}>
          <img src='' className="close-cart svg" alt="closeCart" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
