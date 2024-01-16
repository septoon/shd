import React from 'react';
import { NavLink } from 'react-router-dom';
import './Burger.media.css';

const Navbar = ({ toggleMenu, isOpen }) => {
  if (isOpen === true) {
    return (
      <div className="w-full flex flex-col items-center h-screen">
  
        <NavLink to="/shd" onClick={toggleMenu}>Меню</NavLink>
        {/* <NavLink to="/gallery" onClick={toggleMenu}>Галерея</NavLink> */}
        <NavLink to="/about" onClick={toggleMenu}>О нас</NavLink>
        <NavLink to="/cart" onClick={toggleMenu}>Корзина</NavLink>
      </div>
    );

  }
};

export default Navbar;
