import React from "react";

import {useSelector, useDispatch} from 'react-redux'
import { addDishToCartAC } from "../../redux/cart-reducer"
import { toggleIsActive } from "../../redux/catalog-reducer"
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";
import cartIcon from '../../assets/img/shopping-cart.svg'

const Menu = ({item, catalogName}) => {
  const dispatch = useDispatch()
  
  const { isActive, totalPrice, items } = useSelector(({ catalogPage, cart }) => ({
    isActive: catalogPage.isActive,
    totalPrice: cart.totalPrice,
    items: cart.items
  }))

  const addDishToCart = (obj) => {
    dispatch(addDishToCartAC(obj))
  }
  return (
    <div className="w-full flex flex-col justify-start mt-6">
      <h1 className="px-4 text-2xl font-semibold">Меню</h1>
      <h3 className="px-4 text-xl font-semibold text-metal mb-8">{catalogName ? catalogName : 'Холодные закуски'}</h3>
      <div className=" flex flex-wrap justify-start px-5">
        {item.map((i) => (
          <MenuItem {...i} key={i.id} onClickAddDish={addDishToCart} toggleIsActive={toggleIsActive} isActive={isActive} />
          ))}
      </div>
      {
        items.length > 0 && (
          <NavLink to='/cart' className='w-24 h-10 flex justify-around items-center animate-pulse rounded-md text-white bg-lightSlate-gray shadow-xl bg-cover bg-center fixed bottom-6 left-6'>
              <img className="h-6" src={cartIcon} alt="icon" />
              <span className="font-bold">{totalPrice} ₽</span>
          </NavLink>
        )
      }
    </div>
  );
};

export default Menu;