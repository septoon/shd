import React from 'react'

const MenuBtn = ({toggleMenuItems}) => {
  
  return (
    <button className='w-14 h-14 bg-menu shadow-xl bg-cover bg-center fixed bottom-6 right-6' onClick={toggleMenuItems}>
      
    </button>
  )
}

export default MenuBtn