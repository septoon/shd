import React from 'react'
import WaiterIcon from '../../assets/img/icons/Waiter.png'
import CookIcon from '../../assets/img/icons/cook.png'
import MangalIcon from '../../assets/img/icons/mangal.png'
import AdministratorIcon from '../../assets/img/icons/Administrator.png'
import WashingIcon from '../../assets/img/icons/Washing.png'

const Vacancies = () => {
  return (
    <div className='pt-6 w-full h-full flex flex-col'>
      <h1 className="pl-6 mb-6 text-title font-bold font-comfortaa">Вакансии</h1>
      <div className='pl-3 mb-8'>
        <div className='flex items-center mb-2'>
          <img className='w-10 mr-3' src={WaiterIcon} alt="WaiterIcon" />
          <span className='text-xl font-comfortaa'>Официант</span>
        </div>
        <div className='flex items-center mb-2'>
          <img className='w-10 mr-3' src={CookIcon} alt="CookIcon" />
          <span className='text-xl font-comfortaa'>Повар</span>
        </div>
        <div className='flex items-center mb-2'>
          <img className='w-10 mr-3' src={MangalIcon} alt="MangalIcon" />
          <span className='text-xl font-comfortaa'>Мангальщик</span>
        </div>
        <div className='flex items-center mb-2'>
          <img className='w-10 mr-3' src={AdministratorIcon} alt="AdministratorIcon" />
          <span className='text-xl font-comfortaa'>Администратор</span>
        </div>
        <div className='flex items-center mb-2'>
          <img className='w-10 mr-3' src={WashingIcon} alt="WashingIcon" />
          <span className='text-xl font-comfortaa'>Посудомойщица</span>
        </div>
      </div>
      <span className='pl-3 mb-2'>Обращаться по телефону:</span>
      <span className=" pl-3 font-extrabold text-lightSlate-gray text-xl">
        <a href="tel:+79788796220">+7 (978) 879-62-20</a>
      </span>
    </div>
  )
}

export default Vacancies