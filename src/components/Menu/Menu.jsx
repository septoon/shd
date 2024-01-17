import React from "react";

import {useSelector, useDispatch} from 'react-redux'
import { addDishToCartAC } from "../../redux/cart-reducer"
import { toggleIsActive } from "../../redux/catalog-reducer"
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";

const Menu = ({item, catalogName}) => {
  const dispatch = useDispatch()
  
  const { isActive, totalCount, items } = useSelector(({ catalogPage, cart }) => ({
    isActive: catalogPage.isActive,
    totalCount: cart.totalCount,
    items: cart.items
  }))

  const addDishToCart = (obj) => {
    dispatch(addDishToCartAC(obj))
  }
  return (
    <div className="w-full flex flex-col justify-start mt-6">
      <h1 className="px-4 text-2xl font-semibold">Меню</h1>
      <h3 className="px-4 text-xl font-semibold text-metal mb-8">{catalogName ? catalogName : 'Холодные закуски'}</h3>
      <div className=" flex flex-wrap justify-start ">
        {item.map((i) => (
          <MenuItem {...i} key={i.id} onClickAddDish={addDishToCart} toggleIsActive={toggleIsActive} isActive={isActive} />
          ))}
      </div>
      {
        items.length > 0 && (
          <NavLink to='/cart' className='w-20 h-12 animate-pulse rounded-md bg-white shadow-xl bg-cover bg-center fixed bottom-6 left-6'>
              В корзине {totalCount} шт.
          </NavLink>
        )
      }
    </div>
  );
};

export default Menu;