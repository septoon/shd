import React from 'react'

const Header = ({toggleMenu, isOpen}) => {
  return (
    <div className="flex h-20 items-center justify-between fixed top-0 left-0 right-0 bg-dark">
      <div className='flex flex-row justify-center w-1/2'>
        <h3 className=" font-bold uppercase text-white">Шашлычный дом</h3>
      </div>
      <div className='w-1/2 flex justify-end pr-6'>
        {
          isOpen ? (
            <button type="button" onClick={toggleMenu}>
              <div className="">
                <svg
                  className="h-8 w-8 text-white animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </button>
          ) : (
            <button type="button" onClick={toggleMenu}>
              <div className="w-8 space-y-2" >
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
              </div>
            </button>
          )
        }

      </div>
    </div>
  )
}

export default Header
