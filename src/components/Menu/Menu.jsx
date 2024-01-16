import React from "react";

import {useSelector, useDispatch} from 'react-redux'
import { addDishToCartAC } from "../../redux/cart-reducer"
import { toggleIsActive } from "../../redux/catalog-reducer"
import MenuItem from "./MenuItem";

const Menu = ({item}) => {
  const dispatch = useDispatch()
  const { isActive } = useSelector(({ catalogPage }) => ({
    isActive: catalogPage.isActive
  }))

  const addDishToCart = (obj) => {
    dispatch(addDishToCartAC(obj))
  }
  return (
    <div className="w-full flex flex-col justify-start mt-6">
      <div className=" flex flex-wrap justify-start ">
        {item.map((i) => (
          <MenuItem {...i} key={i.id} onClickAddDish={addDishToCart} toggleIsActive={toggleIsActive} isActive={isActive} />
          ))}
      </div>
    </div>
  );
};

export default Menu;