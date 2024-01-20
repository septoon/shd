import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearDishCartAC, removeDishAC } from '../../redux/cart-reducer';
import CartItem from './CartItem';
import Trash from '../../assets/img/trash.svg'

import axios from 'axios';
import Order from './Order';

const Cart = ({isOpen}) => {
  const dispatch = useDispatch();

  const { items, totalCount, totalPrice } = useSelector(({ cart }) => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));

  // Создаем новый массив уникальных элементов, используя метод reduce().
  const uniqueProducts = items.reduce((acc, current) => {
    // Проверяем, есть ли элемент с таким же id в массиве acc
    const isDuplicate = acc.find(
      (item) => item.id === current.id && item.activeSize === current.activeSize,
    );
    // Если элемент не найден, добавляем его в массив acc.
    if (!isDuplicate) {
      acc.push(current);
    }
    // Возвращаем массив acc на каждой итерации
    return acc;
  }, []);

  const countById = (items, id, activeSize) => {
    return items.reduce((count, i) => {
      if (i.id === id && i.activeSize === activeSize) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const [isOrder, setIsOrder] = React.useState(false);

  const onClickRemoveDish = (dishObj) => {
    dispatch(removeDishAC(dishObj));
  };
  const onClickClearCart = () => {
    dispatch(clearDishCartAC());
  };

  const ordersCount = Math.floor(Math.random() * 99999999);

  const sendOrder = async (orderType, address, phoneNumber, comment, pizzas, pay) => {
    let message = `
    Заказ # ${ordersCount}
    ${orderType}
    ${pizzas.toString()}
    Сумма: ${totalPrice}
    Адрес Доставки: ${address}
    Номер телефона: ${phoneNumber}
    Комментарий: ${comment}
    Способ оплаты: ${pay}
          `;
    await axios.post(
        'https://api.telegram.org/bot6449386041:AAGzqG0r-R9AJFcY0EeV0vv6XBjFNDx_7xE/sendMessage',
        {
          chat_id: '-1001929441485',
          text: message,
        },
      )
      .then((res) => {
        onClickClearCart();
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="pt-6 w-full">
      <h1 className="pl-6 text-title font-semibold">Корзина</h1>
      {isOrder && (
        <Order
          setIsOrder={setIsOrder}
          onClickClearCart={onClickClearCart}
          countById={countById}
          totalItems={items}
          items={uniqueProducts}
          totalCount={totalCount}
          totalPrice={totalPrice}
          sendOrder={sendOrder}
        />
      )}
      <div className="">
        {items.length ? (
          // Если в корзине что-то есть
          <>
            <div className="w-full flex justify-end text-lightSlate-gray pr-6">
              <div
                className="flex mt-2 mb-4"
                onClick={() => {
                  let popup = window.confirm('Вы уверены, что хотите очистить корзину?');
                  popup && dispatch(clearDishCartAC());
                }}>
                <img className='text-lightSlate-gray' src={Trash} alt="trash" />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="px-2 max-h-half-screen overflow-y-auto">
              {uniqueProducts.map((item, index) => {
                const count = countById(items, item.id, item.activeSize);

                return (
                  <CartItem
                    key={index}
                    countById={count}
                    onClickRemoveDish={onClickRemoveDish}
                    {...item}
                  />
                );
              })}
            </div>
            <div className="">
              <div className={isOpen ? "translate-y-screen-20 transition-all" : "fixed bottom-[12%] left-0 w-full flex flex-col justify-between px-6 transition-all"}>
                <span>
                  {' '}
                  Всего блюд: <b className='font-bold text-lg text-lightSlate-gray'>{totalCount} шт.</b>{' '}
                </span>
                <span>
                  {' '}
                  Сумма заказа: <b className='text-lightSlate-gray text-lg'>{totalPrice} ₽</b>{' '}
                </span>
              </div>
              <div className="">
                <div className="">
                  <button className="w-auto bg-lightSlate-gray text-white px-4 py-2 rounded-md fixed bottom-main-btn left-6" onClick={() => setIsOrder(true)}>
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Если корзина пустая
          <div className="px-6 pt-6">
            <h2 className='mb-6'>Корзина пустая</h2>
            <p>
              Вероятней всего, вы еще ничего не заказали. Для того, чтобы сделать заказ, перейди на
              страницу меню.
            </p>

            <NavLink to="/menu" className="">
              <button className="w-auto bg-lightSlate-gray text-white px-4 py-2 rounded-md fixed bottom-main-btn left-6">Вернуться назад</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
