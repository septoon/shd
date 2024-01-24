import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ toggleMenu }) => {
    return (
      <div className="w-full h-full flex flex-col items-center transition-all z-50">
        <div className='w-full h-1/2 uppercase font-bold font-comfortaa text-lg text-dark flex flex-col items-start justify-between'>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src="https://img.icons8.com/ios/100/home-page.png" alt="home-page"/>
            <NavLink to="/shd" onClick={toggleMenu}>Главная</NavLink>
          </div>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src="https://img.icons8.com/external-line-zulfa-mahendra/96/external-book-food-delivery-line-zulfa-mahendra.png" alt="external-book-food-delivery-line-zulfa-mahendra"/>
            <NavLink to="/menu-items" onClick={toggleMenu}>Меню</NavLink>
          </div>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src="https://img.icons8.com/ios/100/delivery--v1.png" alt="delivery--v1"/>
            <NavLink NavLink to="/delivery" onClick={toggleMenu}>Доставка и оплата</NavLink>
          </div>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src="https://img.icons8.com/ios/100/apple-contacts.png" alt="apple-contacts"/>
            <NavLink NavLink to="/contacts" onClick={toggleMenu}>Контакты</NavLink>
          </div>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src="https://img.icons8.com/pastel-glyph/64/shopping-cart--v2.png" alt="shopping-cart--v2"/>
            <NavLink to="/cart" onClick={toggleMenu}>Корзина</NavLink>
          </div>
          
        </div>
        
      </div>
    );
    
};

export default Navbar;
