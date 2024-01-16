import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearDishCartAC, removeDishAC } from '../../redux/cart-reducer';
import CartItem from './CartItem';

const Cart = () => {
  const dispatch = useDispatch();

  const { items, totalCount, totalPrice } = useSelector(({ cart }) => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));

  console.log(items)

  const backBtnClassName = items.length ? 'cart_back_btn' : 'cart_back_btn empty';

  // Создайте новый массив уникальных элементов, используя метод reduce().
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
  return (
    <div className="cart_wrapper">
      <div className="content">
        <div className="container container--cart">
          {isOrder && (
            <div></div>
          )}
          <div className="cart">
            {items.length ? (
              // Если в корзине что-то есть
              <>
                <div className="cart__top">
                  <h2 className="content__title">
                    {' '}
                    Корзина
                  </h2>
                  <div
                    className="cart__clear"
                    onClick={() => {
                      let popup = window.confirm('Вы уверены, что хотите очистить корзину?');
                      popup && dispatch(clearDishCartAC());
                    }}>
                    <img src='' alt="trash" />
                    <span>Очистить корзину</span>
                  </div>
                </div>
                <div className="content__items">
                  {uniqueProducts.map((item, index) => (
                     <CartItem
                     key={index}
                     onClickRemoveDish={onClickRemoveDish}
                     {...item}
                   />
                  ) )
                  }
                </div>
                <div className="cart__bottom">
                  <div className="cart__bottom-details">
                    <span>
                      {' '}
                      Всего блюд: <b>{totalCount} шт.</b>{' '}
                    </span>
                    <span>
                      {' '}
                      Сумма заказа: <b>{totalPrice} ₽</b>{' '}
                    </span>
                  </div>
                  <div className="cart__bottom-buttons">
                    <NavLink to="/shd" className="cart_bottom" >
                      <button className={backBtnClassName}>Вернуться назад</button>
                    </NavLink>
                    <div className="button pay-btn cart_bottom">
                      <button className="btn-order" onClick={() => setIsOrder(true)}>
                        Заказать
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Если корзина пустая
              <div className="empty_cart">
                <h2>Корзина пустая</h2>
                <p>
                  Вероятней всего, вы еще ничего не заказали. Для того, чтобы сделать заказ,
                  перейди на страницу меню.
                </p>
                <img src='' alt="empty-cart-logo" className="empty-cart-logo" />

                <NavLink to="/shd" className="cart_back_btn_wrapper">
                  <button className={backBtnClassName}>Вернуться назад</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
