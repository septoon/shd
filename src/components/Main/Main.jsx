import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <div className="pt-6 px-6 w-full h-[calc(100vh-80px)] overflow-hidden bg-main text-white bg-cover bg-no-repeat bg-center bg-fixed">
      <h1 className=" text-2xl font-semibold">Главная</h1>
      <div className='flex flex-col justify-around h-[50%]'>
        <div className=" flex flex-col">
          <span className='text-xl italic'>Доставка вкусного шашлыка в Алуште</span>
          <span className='text-xl font-semibold my-3'>Бесплатная доставка от 1000 рублей</span>
          <span className='text-2xl font-semibold'>с 11:00 до 23:00 </span>
        </div>
        <NavLink to="/menu" className="w-full ">
          <button className="w-auto bg-lightSlate-gray text-white text-xl px-4 py-2 rounded-2xl ">
            Перейти в меню
          </button>
        </NavLink>
        <div className="w-full flex flex-col ">
          <span className='text-xl'>Адрес:</span>
          <span className='text-xl font-semibold'>г. Алушта</span>
          <span className='text-xl font-semibold'>ул. Ленина 13</span>
        </div>
        <div className="flex flex-col">
          <span className='text-xl shadow'>Стоимость доставки:</span>
          <span className='text-xl font-semibold'>200р</span>
        </div>
      </div>
        <div className="flex flex-col w-aut fixed bottom-main-btn left-6">
          <span className='text-xl'>Заказать можно по номеру:</span>
          <span className="font-extrabold text-white text-xl">
            <a href="tel:+79788796220">+7 (978) 879-62-20</a>
          </span>
        </div>
    </div>
  );
};

export default Main;
