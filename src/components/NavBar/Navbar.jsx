import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ toggleMenu, isOpen }) => {
    return (
      <div className={isOpen ? "w-full flex flex-col items-center  py-8 h-half-screen transition-all" : "h-0 opacity-0 transition-all"}>
        <div className='uppercase font-bold text-lg flex flex-col h-1/2 items-center justify-between'>
          <NavLink to="/shd" onClick={toggleMenu}>Главная</NavLink>
          <NavLink to="/menu" onClick={toggleMenu}>Меню</NavLink>
          <NavLink to="/delivery" onClick={toggleMenu}>Доставка и оплата</NavLink>
          <NavLink to="/contacts" onClick={toggleMenu}>Контакты</NavLink>
          <NavLink to="/cart" onClick={toggleMenu}>Корзина</NavLink>
        </div>
        
      </div>
    );
    
};

export default Navbar;
