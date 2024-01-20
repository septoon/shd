import React, { useState } from 'react'

const Order = ({
  setIsOrder,
  items,
  countById,
  totalItems,
  onClickClearCart,
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
    const value = `${i.name} | ${i.serving} | ${i.price} ₽ | x ${count}шт.`;
    return value;
  });
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
      <div className="">
        <div className='h-auto w-full pr-6 pt-3 flex justify-end'>
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
        <h1 className="pl-6 text-2xl font-semibold mb-4">Ваш заказ:</h1>
        <div className="px-2">
          <div className="max-h-20vh overflow-y-auto flex flex-col">
            {items.map((i) => {
              const count = countById(totalItems, i.id, i.activeSize);
              return (
               
                <span key={i.id} className="w-full text-xs">{`${i.name} | ${i.serving ? i.serving + ' |': ''} ${i.price} ₽ | x ${count}шт.`}</span>
              );
            })}
          </div>
          <div className="flex flex-col">
            <span>На сумму: <b className='text-lightSlate-gray'>{totalPrice}</b> ₽</span>
            <label>Введите ваш адрес:</label>
            <div className="inp_valid">
              <input
                required
                className="bg-transparent border-0"
                onChange={handleAddressChange}
                name="address"
                placeholder="ул. Ленина, 13"
              />
            </div>
            <label>Введите ваш номер телефона:</label>
            <div className="inp_valid">
              <input
                required
                className="order_input"
                onChange={handlePhoneNumChange}
                placeholder="+7 (978) 879 62 20"
                name="telephone"
                type="tel"
              />
            </div>
            <div className='w-full'>
              <input
                className='w-full'
                name="comment"
                onChange={handleCommentChange}
                type="text"
                placeholder="Например: сок мультифрукт, вода без газа и т.д.."
              />
            </div>
            <label>Спооб оплаты:</label>
            <div className="payment" name="checkbox">
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
          </div>
          <button
            type="submit"
            disabled={!address}
            className="w-auto bg-lightSlate-gray text-white px-4 py-2 rounded-md fixed bottom-main-btn left-6"
            onClick={() => {
              sendOrder('Доставка', address, phoneNum, commentValue, dishesList.toString(), payValue)
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
}

export default Order