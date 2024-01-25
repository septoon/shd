import React from 'react';
import { NavLink } from 'react-router-dom';
import MainIcon from '../../assets/img/icons/home-page.png'
import MenuIcon from '../../assets/img/icons/menu.png'
import DeliveryIcon from '../../assets/img/icons/delivery--v1.png'
import ContactsIcon from '../../assets/img/icons/apple-contacts.png'
import CartIcon from '../../assets/img/icons/shopping-cart--v2.png'
import VacanciesIcon from '../../assets/img/icons/lawyer.png'

const Navbar = ({ toggleMenu }) => {
    return (
      <div className="w-full h-full flex flex-col items-center transition-all z-50">
        <div className='w-full h-1/2 uppercase font-bold font-comfortaa text-lg text-dark flex flex-col items-start justify-between'>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src={MainIcon} alt="home-page"/>
            <NavLink to="/shd" onClick={toggleMenu}>Главная</NavLink>
          </div>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src={MenuIcon} alt="external-book-food-delivery-line-zulfa-mahendra"/>
            <NavLink to="/menu-items" onClick={toggleMenu}>Меню</NavLink>
          </div>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src={DeliveryIcon} alt="delivery--v1"/>
            <NavLink NavLink to="/delivery" onClick={toggleMenu}>Доставка и оплата</NavLink>
          </div>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src={ContactsIcon} alt="apple-contacts"/>
            <NavLink NavLink to="/contacts" onClick={toggleMenu}>Контакты</NavLink>
          </div>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src={CartIcon} alt="shopping-cart--v2"/>
            <NavLink to="/cart" onClick={toggleMenu}>Корзина</NavLink>
          </div>
          <div className='flex items-center'>
            <img width="20" height="20" className='mr-4' src={VacanciesIcon} alt="vacancies"/>
            <NavLink to="/vacancies" onClick={toggleMenu}>Вакансии</NavLink>
          </div>
          
        </div>
        
      </div>
    );
    
};

export default Navbar;
