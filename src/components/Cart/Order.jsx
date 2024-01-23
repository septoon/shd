import React, { useState } from 'react';

const Order = ({
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
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0  bg-white z-50">
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
          <div className="flex flex-col ">
            <span className='mb-6'>
              На сумму: <b className="text-lightSlate-gray">{totalPrice}</b> ₽
            </span>
            {orderType === 'Доставка' && (
              <div className="flex flex-col">
                <label className='mb-1'>Введите ваш адрес:</label>
                <input
                  required
                  className="bg-light-gray w-1/2 border-0 border-md p-2"
                  onChange={handleAddressChange}
                  name="address"
                  placeholder="ул. Ленина, 13"
                />
              </div>
            )}
            <label>Введите ваш номер телефона:</label>
            <div className="mb-3">
              <input
                required
                className="bg-light-gray w-1/2 p-2"
                onChange={handlePhoneNumChange}
                maxLength="12"
                placeholder="+7 (978) 879 62 20"
                name="telephone"
                type="tel"
              />
            </div>
            <div className="w-full">
              <input
                className="bg-light-gray w-1/2 border-0 border-md p-2"
                name="comment"
                onChange={handleCommentChange}
                type="text"
                placeholder="Например: сок мультифрукт, вода без газа и т.д.."
              />
            </div>
            {orderType === 'Доставка' && (
              <div className="flex flex-col fixed bottom-[12dvh]" name="checkbox">
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
          </div>
          <button
            type="submit"
            disabled={!address}
            className="w-auto bg-lightSlate-gray text-white px-4 py-2 rounded-md fixed bottom-main-btn left-6"
            onClick={() => {
              sendOrder(
                orderType,
                address,
                phoneNum,
                commentValue,
                dishesList.toString(),
                payValue,
              );
              setTimeout(() => {
                setIsOrder(false);
              }, 2000);
            }}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
