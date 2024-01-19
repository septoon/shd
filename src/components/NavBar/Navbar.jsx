import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ toggleMenu, isOpen }) => {
    return (
      <div className={isOpen ? "w-full flex flex-col items-center justify-between py-8 h-half-screen transition-all" : "h-0 opacity-0 transition-all"}>
        <div className='uppercase font-bold text-lg flex flex-col h-1/2 items-center justify-between'>
          <NavLink to="/shd" onClick={toggleMenu}>Меню</NavLink>
          <NavLink to="/delivery" onClick={toggleMenu}>Доставка и оплата</NavLink>
          <NavLink to="/contacts" onClick={toggleMenu}>Контакты</NavLink>
          <NavLink to="/cart" onClick={toggleMenu}>Корзина</NavLink>
        </div>
        <div>
          <h1 className='font-bold text-lightSlate-gray text-xl'>
            <a href="tel:+79788796220">+7 (978) 879-62-20</a>
          </h1>
        </div>
      </div>
    );
    
};

export default Navbar;
