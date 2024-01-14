import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex h-20 items-center justify-between fixed top-0 left-0 right-0 bg-dark">
      <div className='flex flex-row justify-center w-1/3'>
        <h3 className=" font-bold uppercase text-white">Шашлычный дом</h3>
      </div>
      <div className='w-2/3 flex justify-around text-white'>
        <NavLink to="/">Меню</NavLink>
        <NavLink to="/gallery">Галерея</NavLink>
        <NavLink to="/about">О нас</NavLink>
        <NavLink to="/cart">Корзина</NavLink>
      </div>
    </div>
  )
}

export default Header
