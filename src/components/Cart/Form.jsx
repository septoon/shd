import React, { useRef, useState } from 'react';

const Form = ({
  setIsOrder,
  items,
  countById,
  totalItems,
  onClickClearCart,
  totalPrice,
  sendOrder,
}) => {
  const form = useRef();
  const comment = useRef();

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
        <form
          ref={form}
          onSubmit={() =>
            sendOrder('Доставка', address, phoneNum, commentValue, dishesList.toString(), payValue)
          }
          className="form-total">
          <div className="order_list_wrapper">
            {items.map((i) => {
              const count = countById(totalItems, i.id, i.activeSize);
              return (
                <input
                  key={i.id}
                  className="hidden-input"
                  name={i.id}
                  defaultValue={`${i.name} | ${i.serving} | ${i.price} ₽ | x ${count}шт.`}
                />
              );
            })}
          </div>
          <div className="order_inputs_wrapper">
            <input
              className="hidden-input"
              type="text"
              name="message"
              defaultValue={`На сумму: ${totalPrice} ₽`}
            />
            <label>Введите ваш адрес:</label>
            <div className="inp_valid">
              <input
                required
                className="order_input"
                onChange={handleAddressChange}
                name="address"
                placeholder="ул. Горького, 54"
              />
            </div>
            <label>Введите ваш номер телефона:</label>
            <div className="inp_valid">
              <input
                required
                className="order_input"
                onChange={handlePhoneNumChange}
                placeholder="+7 (978) 704 88 06"
                name="telephone"
                type="tel"
              />
            </div>
            <div>
              <input
                ref={comment}
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
              setTimeout(() => {
                onClickClearCart();
                setIsOrder(false);
              }, 5000);
            }}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
