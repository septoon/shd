import React, { useState } from 'react';

import { InputMask } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { InputSwitch } from 'primereact/inputswitch';
import { addLocale } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Order = ({
  checked,
  setChecked,
  datetime24h,
  setDateTime24h,
  setIsOrder,
  items,
  countById,
  totalItems,
  orderType,
  setOrderType,
  totalPrice,
  sendOrder,
}) => {
  const [address, setAddress] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [commentValue, setCommentValue] = useState('');

  const [phoneMaskValue, setPhoneMaskValue] = useState();

  const [payValue, setPayValue] = useState('');

  function changeValue(e) {
    setPayValue(e.target.value);
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumChange = (event) => {
    setPhoneNum(event.target.value);
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };


  const dishesList = items.map((i) => {
    const count = countById(totalItems, i.id, i.activeSize);
    const value = `${i.name} | ${i.serving ? i.serving + ' |' : ''} | ${i.price} ₽ | x ${count}шт.`;
    return value;
  });

  addLocale('ru', {
    firstDayOfWeek: 1,
    dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    dayNamesShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: 'Сегодня',
    clear: 'Отменить'
});

const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);
        sendOrder(
          orderType,
          address,
          phoneNum,
          commentValue,
          dishesList.toString(),
          payValue,
        );
        setTimeout(() => {
            setLoading(false);
            setIsOrder(false);
        }, 2000);
    };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
      <div className="h-full">
        <div className="h-auto w-full pr-6 pt-3 flex justify-end">
          <button onClick={() => setIsOrder(false)}>
            <svg
              className="h-8 w-8 text-dark"
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
        <div className="w-full flex justify-center">
          <div className='bg-light-gray rounded-md'>
          <button
            className={`text-white w-24 py-1 rounded-md transition-all ${
              orderType === 'Доставка' ? 'bg-lightSlate-gray' : 'bg-light-gray'
            }`}
            onClick={() => {
              setOrderType('Доставка');
            }}>
            Доставка
          </button>
          <button
            className={`text-white w-24 py-1 rounded-md transition-all ${
              orderType === 'Самовывоз' ? 'bg-lightSlate-gray' : 'bg-light-gray'
            }`}
            onClick={() => {
              setOrderType('Самовывоз');
            }}>
            Самовывоз
          </button>
          </div>
        </div>
        <h1 className="pl-3 text-xl font-bold mb-4">Ваш заказ:</h1>
        <div className="px-2 flex flex-col h-full">
          <div className="max-h-32 overflow-y-auto flex flex-col mb-6 border-dashed border p-2 rounded-lg">
            {items.map((i) => {
              const count = countById(totalItems, i.id, i.activeSize);
              return (
                <span key={i.id} className="w-full text-sm">{`${i.name} | ${
                  i.serving ? i.serving + ' |' : ''
                } ${i.price} ₽ | x ${count}шт.`}</span>
              );
            })}
          </div>
          <div className="flex flex-col">
            <span className='mb-6'>
              На сумму: <b className="text-lightSlate-gray">{totalPrice}</b> ₽
            </span>

            <div className="flex-auto w-auto">
              <div className='w-full flex justify-between pr-6'>
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                    {`Выбрать время ${orderType === 'Доставка' ? "доставки" : "самовывоза"}`}
                </label>
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
              </div>
              {
                checked && (
                  <div className='w-auto h-auto bg-white'>
                    <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showIcon showTime locale='ru' dateFormat="mm.dd.yy" hourFormat="24" />
                  </div>
                )
              }
            </div>

            {orderType === 'Доставка' && (
              <div className="flex flex-col">
                <label className='mb-1'>Введите ваш адрес:</label>
                <InputText value={address} className='w-1/2' 
                  onChange={handleAddressChange}
                  placeholder="ул. Ленина, 13"/>
              </div>
            )}
            <label className='mb-1'>Введите ваш номер телефона:</label>
              <InputMask value={phoneMaskValue} className='w-1/2' onChange={(e) => {
                setPhoneMaskValue(e.target.value)
                handlePhoneNumChange(e)
              }} mask="+7(999)999-99-99" placeholder="+7(978)879-62-20"/>
            
            <div className="w-full flex flex-col">
              <label className='mb-1'>Введите комментарий:</label>
              <InputText value={commentValue} className='w-1/2' 
                  onChange={handleCommentChange}
                  placeholder="Например: без лука"/>
            </div>
            {orderType === 'Доставка' && (
              <div className="flex flex-col mt-12 mb-8" name="checkbox">
                <label>Спооб оплаты:</label>
                <div className="payment_method">
                  <input
                    type="radio"
                    onChange={changeValue}
                    defaultValue="Наличные"
                    name="cash"
                    id="cash"
                    checked={payValue === 'Наличные' ? true : false}
                  />{' '}
                  <label className="label_pay" htmlFor="cash">
                    Наличные
                  </label>
                </div>
                <div className="payment_method">
                  <input
                    type="radio"
                    onChange={changeValue}
                    defaultValue="Карта"
                    name="cart"
                    id="cart"
                    checked={payValue === 'Карта' ? true : false}
                  />{' '}
                  <label className="label_pay" htmlFor="cart">
                    Карта
                  </label>
                </div>
              </div>
            )}
            <Button label="Отправить" 
              disabled={orderType === 'Доставка' ? !phoneMaskValue || !address : !phoneMaskValue} 
              icon="pi pi-check" 
              loading={loading}
              onClick={load} iconPos="right" className=' w-[40%] px-4 py-2 f'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
