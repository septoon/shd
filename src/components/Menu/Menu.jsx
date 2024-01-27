import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../assets/img/shopping-cart.svg';
import MenuItem from './MenuItem';
import { addDishToCart } from '../../redux/cart-slice';
import { toggleIsActive } from '../../redux/catalog-slice';

const Menu = ({ item, catalogName }) => {
  const dispatch = useDispatch();

  const { isActive, totalPrice, totalCount, items } = useSelector(({ cart, catalogPage }) => ({
    isActive: catalogPage.isActive,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
    items: cart.items,
  }));

  const handleAddDishToCart = (obj) => {
    dispatch(addDishToCart(obj));
  };

  return (
    <div className="w-full flex flex-col justify-start mt-6">
      <h3 className="px-5 text-title font-extrabold font-comfortaa text-dark mb-3">
        {catalogName ? catalogName : 'Холодные закуски'}
      </h3>
      {
        catalogName === 'Блюда на мангале' && (
          <div className="px-5 text-[14px] py-2 w-auto rounded-md font-extrabold font-comfortaa text-dark mb-8">
            <span className="px-2 text-[14px] border-[1px] border-dashed w-auto py-2 rounded-md font-extrabold font-comfortaa text-dark mb-8">
              Минимальный заказ от 300 грамм
            </span>
          </div>
        )
      }
      <div className=" flex flex-wrap justify-start px-5 pb-[80px]">
        {item.map((i) => (
          <MenuItem
            {...i}
            key={i.id}
            onClickAddDish={handleAddDishToCart}
            toggleIsActive={toggleIsActive}
            isActive={isActive}
          />
        ))}
      </div>
      {items.length > 0 && (
        <NavLink
          to="/cart"
          className="w-auto h-10 px-2 flex justify-around items-center animate-pulse rounded-md text-white bg-lightSlate-gray shadow-xl bg-cover bg-center fixed bottom-main-btn left-6">
          <span className="text-white font-bold">{totalCount}</span>
          <img className="h-6 mx-2" src={cartIcon} alt="icon" />
          <span className="font-bold">{totalPrice} ₽</span>
        </NavLink>
      )}
    </div>
  );
};

export default Menu;
