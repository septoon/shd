import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container flex h-20 items-center justify-between">
      <div className='flex flex-row justify-center w-1/3'>
        <h3 className="text-base font-bold uppercase">Шашлычный дом</h3>
      </div>
      <div className='w-2/3 flex justify-around'>
        <NavLink to="/">Меню</NavLink>
        <NavLink to="/gallery">Галерея</NavLink>
        <NavLink to="/about">О нас</NavLink>
        <NavLink to="/cart">Корзина</NavLink>
      </div>
    </div>
  )
}

export default Header
