import React from 'react';
import pic from '../../assets/img/pic1.jpg';
import { Button } from 'primereact/button';

const MenuItem = ({
  id,
  image,
  name,
  serving,
  options,
  price,
  isChange,
  onClickAddDish,
  toggleIsActive,
  isActive,
}) => {
  const onAddDishes = () => {
    const obj = {
      id,
      name,
      image,
      serving,
      options,
      price,
    };
    onClickAddDish(obj);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-row items-center rounded-10 mb-5 bg-white rounded-md shadow-xl">
      <img
        src={image ? image : pic}
        className="rounded-md min-w-40 min-h-28 max-w-40 max-h-28 object-cover"
        alt="pic"
      />
      <div className='flex flex-col w-full h-full justify-around pl-2'>
        <div className="item_name">
          <span className="name">{name}</span>
        </div>
        <div className="columns">
          {options ? (<span className='font-comfortaa text-sm'>{options}</span>) : (<span className='text-metal'>{serving ? serving : ``}</span>)}
        </div>
        <div className='w-full flex flex-row justify-between items-center pr-2'>
          <span className='font-bold text-lightSlate-gray'>{price} ₽</span>
          <Button className='py-1 px-2 z-0' label="В корзину" onClick={onAddDishes}></Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
