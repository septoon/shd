import React from 'react'
import ShdTitle from '../../assets/img/title-shd.svg'
import ShdLogo from '../../assets/img/logo-shd.png'
import { NavLink } from 'react-router-dom'

const Header = ({toggleMenu, setIsOpen, isOpen}) => {
  return (
    <div className="flex h-20 items-center fixed top-0 left-0 right-0 lg:px-[20%] bg-dark z-50">
      <NavLink to='/shd' onClick={() => setIsOpen(false)} className='flex flex-row justify-start w-full md:w-1/2 lg:w-1/2 px-2'>
        <img src={ShdTitle} alt="Шашлычный Дом" className='w-full max-w-[300px]' />
      </NavLink>
        <img src={ShdLogo} alt="logo" className='h-14 self-center'/>
      <div className='w-1/2 flex justify-end pr-6'>
        {
          isOpen ? (
            <button type="button" onClick={toggleMenu}>
              <div className="">
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
              </div>
            </button>
          ) : (
            <button type="button" onClick={toggleMenu}>
              <div className="w-8 space-y-2" >
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
              </div>
            </button>
          )
        }

      </div>
    </div>
  )
}

export default Header
