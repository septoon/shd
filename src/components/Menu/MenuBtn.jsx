import React from 'react'

const MenuBtn = ({toggleMenuItems}) => {
  
  return (
    <button className='w-16 h-16 bg-white flex justify-center items-center rounded-full shadow-3xl  fixed bottom-main-btn right-6' onClick={toggleMenuItems}>
      <span className='text-lightSlate-gray font-bold'>МЕНЮ</span>
    </button>
  )
}

export default MenuBtn