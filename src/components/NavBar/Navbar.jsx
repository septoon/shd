import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ toggleMenu, isOpen }) => {
    return (
      <div className={isOpen ? "w-full flex flex-col items-center py-8 fixed top-[80px] left-0 right-0 bottom-0 bg-DimGray transition-all z-50" : "hidden transition-all"}>
        <div className='uppercase font-semibold font-comfortaa text-lg text-white flex flex-col h-1/2 items-center justify-between'>
          <NavLink to="/shd" onClick={toggleMenu}>Главная</NavLink>
          <NavLink to="/menu-items" onClick={toggleMenu}>Меню</NavLink>
          <NavLink to="/delivery" onClick={toggleMenu}>Доставка и оплата</NavLink>
          <NavLink to="/contacts" onClick={toggleMenu}>Контакты</NavLink>
          <NavLink to="/cart" onClick={toggleMenu}>Корзина</NavLink>
        </div>
        
      </div>
    );
    
};

export default Navbar;
