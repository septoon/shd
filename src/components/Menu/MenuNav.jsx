import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuNav = ({ data, setItem, setNavVisible, toggleMenuItems, getCatalogName }) => {

  return (
    <div className="w-full flex flex-col relative bg-white justify-around items-start rounded-t-lg h-half-screen pb-10">
        {Object.keys(data).map((category, index) => (
          <NavLink to="/menu" key={index}>
            <button
              className="text-dark text-md font-semibold w-full"
              onClick={(e) => {
                setNavVisible(false)
                setItem(data[category]);
                getCatalogName(category)
                toggleMenuItems(false);
              }}>
              {category}
            </button>
          </NavLink>
        ))}
      </div>
  );
};

export default MenuNav;
