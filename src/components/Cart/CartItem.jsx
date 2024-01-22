import React from 'react';
import Trash from '../../assets/img/trash.svg'
import pic from '../../assets/img/pic1.jpg'

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
    <div className="h-20 px-1.5 flex justify-between items-center mb-2 bg-white rounded-xl">
      <div className="cart__item-img">
        <img className="min-w-10 max-w-10 max-h-8 rounded-md" src={image ? image : pic} alt="картинка" />
      </div>
      <div className="flex flex-col w-1/3">
        <span className='text-[10px] '>{name}</span>
        <span className='text-xs'>{serving}</span>
      </div>
      <div className="">
        <span>{countById}шт.</span>
      </div>
      <div className="">
        <b>{price}₽</b>
      </div>
      <div className="">
        <div className="" onClick={onRemoveDish}>
          <img src={Trash} className="close-cart svg" alt="closeCart" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
