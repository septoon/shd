import React from 'react'
import { NavLink } from 'react-router-dom';

const MenuCards = ({ data, setItem, getCatalogName }) => {
  return (
    <div className="w-full flex flex-col justify-start lg:px-[15%]">
      <h1 className="px-5 text-title font-bold font-comfortaa my-6">Меню</h1>
      <div>
        <div className='flex flex-wrap'>
            {Object.keys(data).map((category, index) => (
              <NavLink to="/menu" key={index} className="text-dark text-md font-semibold w-[50%] mb-3 flex flex-col items-center justify-around"
              onClick={(e) => {
                setItem(data[category]);
                getCatalogName(category)
              }}>
                <img src={data[category][0].image} className='w-[95%] min-h-28 max-h-28 object-cover rounded-md' alt="menu-item" />
                <span>{category}</span>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MenuCards