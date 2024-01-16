import React from 'react';
import pic from '../../assets/img/pic1.jpg';

const MenuItem = ({ id, image, name, serving, price, isChange, onClickAddDish, toggleIsActive, isActive }) => {
  const priceHolder = React.createRef();

  const onAddDishes = () => {
    const obj = {
      id,
      name,
      image,
      serving,
      price,
    };
    onClickAddDish(obj);
  };

  return (
    <div className="w-5/12 flex flex-col items-center rounded-10 ml-5">
      <img src={pic} className="rounded-md" alt="pic" />
      <div className="item_name">
        <span className="name">{name}</span>
      </div>
      <div className="columns">
        <span>{serving ? serving : ``}</span>
        <span>{price} ₽</span>
      </div>
      <button onClick={onAddDishes}>Заказать</button>
    </div>
  );
};

export default MenuItem;
