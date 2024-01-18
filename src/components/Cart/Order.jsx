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
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white">
      <div className="email-form-wrapper">
        <img src="" className="close-btn" alt="close" onClick={() => setIsOrder(false)} />
        <h2 className="form-title">Ваш заказ:</h2>
        <div className="form-total">
          <div className="order_list_wrapper">
            {items.map((i) => {
              const count = countById(totalItems, i.id, i.activeSize);
              return (
               
                <span key={i.id} className="w-full">{`${i.name} | ${i.serving} | ${i.price} ₽ | x ${count}шт.`}</span>
              );
            })}
          </div>
          <div className="order_inputs_wrapper">
            <span>{`На сумму: ${totalPrice} ₽`}</span>
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
            <div>
              <input
                name="comment"
                onChange={handleCommentChange}
                type="text"
                placeholder="Комментарий"
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
            className="bg-purple w-auto"
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