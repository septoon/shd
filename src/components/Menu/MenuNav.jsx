import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuNav = ({ data, setItem, isItemsOpen, toggleMenuItems }) => {
  return (
    <div className={isItemsOpen ? '' : 'hidden'}>
      <div className="min-w-56 flex flex-col bg-white justify-around items-start pl-2 rounded-xl shadow-lg shadow-black-900/50 h-96">
        <h1 className="text-dark font-bold text-xl">Меню</h1>
        {Object.keys(data).map((category, index) => (
          <NavLink to="/shd">
            <button
              key={index}
              className="text-dark text-sm hover:text-orange"
              onClick={(e) => {
                setItem(data[category]);
                toggleMenuItems(false);
              }}>
              {category}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MenuNav;
