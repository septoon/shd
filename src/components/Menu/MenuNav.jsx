import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuNav = ({ data, setItem, isItemsOpen, setIsItemsOpen, toggleMenuItems, getCatalogName }) => {

  return (
    <div className={isItemsOpen ? 'w-full fixed bottom-0 transition-all duration-600' : 'w-full fixed -bottom-96 transition-all duration-600'}>
      <div className="w-full flex flex-col relative bg-white justify-around items-start rounded-t-lg h-auto pb-6">
        <div className='bg-dark w-full h-10 rounded-t-lg flex items-center justify-around'>
          <span>Меню</span>
          <button onClick={() => setIsItemsOpen(false)} className='text-white mr-2'>
          <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
          </button>
        </div>
        {Object.keys(data).map((category, index) => (
          <NavLink to="/shd" key={index}>
            <button
              className="text-dark text-sm hover:text-orange w-full"
              onClick={(e) => {
                setItem(data[category]);
                getCatalogName(category)
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
