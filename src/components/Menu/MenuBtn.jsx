import React from 'react'

const MenuBtn = ({showNav}) => {
  
  return (
    <button className='w-16 h-16 bg-white flex justify-center items-center rounded-full shadow-3xl fixed bottom-main-btn right-6 lg:right-[20%]' onClick={() => showNav('bottom')}>
      <span className='text-lightSlate-gray font-bold'>МЕНЮ</span>
    </button>
  )
}

export default MenuBtn