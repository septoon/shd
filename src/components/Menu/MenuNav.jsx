import React from 'react';
import { NavLink } from 'react-router-dom';
import { icons } from '../../assets/data/icons';


const MenuNav = ({ data, setItem, setNavVisible, toggleMenuItems, getCatalogName }) => {

  return (
    <div className="w-full flex justify-start relative bg-white font-comfortaa font-bold items-start rounded-t-lg h-half-screen pb-10">
        <div className='w-4 mr-2 pt-1'>
          {
            icons.map((item, index) => <img src={item.icon} alt='icon' className='w-auto mb-2' key={index} />)
          }
        </div>
        <div className='flex flex-col items-start'>
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
      </div>
  );
};

export default MenuNav;
