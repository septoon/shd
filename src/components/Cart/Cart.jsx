import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearDishCartAC, removeDishAC } from '../../redux/cart-reducer';
import CartItem from './CartItem';
import Trash from '../../assets/img/trash.svg'
import CartIcon from '../../assets/img/cart-logo.svg'

import axios from 'axios';
import Order from './Order';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import OrderFinish from './OrderFinish';

const Cart = () => {
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

  const [isOrderFinish, setIsOrderFinish] = useState(false);

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState('center');
  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

  const showCheck = (position) => {
    setPosition(position);
    setIsOrderFinish(true);
  };

  const footerContent = (
    <div>
        <Button label="Ok" className='py-2 px-4' icon="pi pi-check" onClick={() => setIsOrderFinish(false)} autoFocus />
    </div>
);

  const onClickRemoveDish = (dishObj) => {
    dispatch(removeDishAC(dishObj));
  };
  const onClickClearCart = () => {
    dispatch(clearDishCartAC());
  };

  const [datetime24h, setDateTime24h] = useState(new Date());
  const shortDate = datetime24h.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const shortTime = datetime24h.toLocaleTimeString('ru-RU', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  });

  const [checked, setChecked] = useState(false);

  const [orderType, setOrderType] = useState('Доставка');
  const ordersCount = Math.floor(Math.random() * 99999999);

  const [orderValues, setOrderValues] = useState({})

  const sendOrder = async (orderType, address, phoneNumber, comment, dishes, pay) => {
    let message = orderType === 'Доставка' ? `
    Заказ # ${ordersCount}
    ${orderType}
    ${dishes.toString()}
    Сумма: ${totalPrice}
    Адрес Доставки: ${address}
    Номер телефона: ${phoneNumber}
            ${checked ? `
    Дата доставки: ${shortDate}
    Время доставки: ${shortTime}` : `
    Дата доставки: Сегодня
    Время доставки: Сейчас`}
    Комментарий: ${comment}
    Способ оплаты: ${pay}
          ` :
    `Заказ # ${ordersCount}
    ${orderType}
    ${dishes.toString()}
    Сумма: ${totalPrice}
    Номер телефона: ${phoneNumber}
            ${checked ? `
    Дата доставки: ${shortDate}
    Время доставки: ${shortTime}` : `
    Дата доставки: Сегодня
    Время доставки: Сейчас`}
          `
    setOrderValues({
      orderType,
      address, 
      phoneNumber, 
      comment, 
      dishes,
      totalPrice,
      pay
    })
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
      <h1 className="pl-6 text-title font-bold font-comfortaa">Корзина</h1>
      <Dialog header="Ваш заказ" visible={visible} position={position} style={{ width: '100vw' }} onHide={() => setVisible(false)} draggable={false} resizable={false}>
        <Order
            checked={checked}
            setChecked={setChecked}
            setIsOrderFinish={setIsOrderFinish}
            datetime24h={datetime24h}
            setDateTime24h={setDateTime24h}
            setVisible={setVisible}
            onClickClearCart={onClickClearCart}
            countById={countById}
            totalItems={items}
            items={uniqueProducts}
            totalCount={totalCount}
            totalPrice={totalPrice}
            sendOrder={sendOrder}
            orderType={orderType}
            setOrderType={setOrderType}
          />
      </Dialog>
      <Dialog header="Спасибо за заказ" visible={isOrderFinish} position={position} style={{ width: '100vw' }} footer={footerContent}  onHide={() => setIsOrderFinish(false)}  draggable={false} resizable={false}>
        <OrderFinish orderValues={orderValues} shortDate={shortDate} shortTime={shortTime} />
      </Dialog>
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
              <div className="fixed bottom-[12%] left-0 w-full flex flex-col justify-between px-6 lg:pl-[20%] transition-all">
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
                <Button className='px-4 py-2 bg-lightSlate-gray rounded-md fixed bottom-main-btn left-6 lg:left-[20%]' onClick={() => show('bottom')} label='Оформить заказ' />
                </div>
              </div>
            </div>
          </>
        ) : (
          // Если корзина пустая
          <div className="px-6 pt-6 w-full flex flex-col items-center justify-around">
            <h2 className='mb-6 self-start'>Корзина пустая</h2>
            <img src={CartIcon} className='opacity-50 w-1/2' alt="cart" />
            <span className='mt-6'>
              Вероятней всего, вы еще ничего не заказали. Для того, чтобы сделать заказ, перейди на
              страницу меню.
            </span>
            <NavLink to="/menu" className="">
              <Button className='px-4 py-2 bg-lightSlate-gray rounded-md fixed bottom-main-btn left-6 lg:left-[20%]' label='Вернуться назад' />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
