import React from 'react';

const OrderFinish = ({ orderValues, shortDate, shortTime }) => {
  return (
    <>
      {orderValues.orderType === 'Доставка' ? (
        <div className="w-full flex flex-col">
          <span className="mb-2">
            <b>Тип заказа: </b> {orderValues.orderType}
          </span>
          <span className="mb-2">
            <b>Адрес:</b> {orderValues.address}
          </span>
          <span className="mb-2">
            <b>Номер телефона:</b> {orderValues.phoneNumber}
          </span>
          <span className="mb-2">
            <b>Комментарий:</b> {orderValues.comment ? orderValues.comment : 'Не указан'}
          </span>
          <span className="mb-2">
            <b>Заказ:</b>
          </span>
          <span className="text-sm mb-2">{orderValues.dishes}</span>
          <span className="text-sm mb-2"><b>Сумма:</b> {orderValues.totalPrice}</span>
          <span className="mb-2">
            <b>Дата:</b> {orderValues.checked ? shortDate : 'Сегодня'}
          </span>
          <span className="mb-2">
            <b>Время:</b> {orderValues.checked ? shortTime : 'Ближайшее'}
          </span>
          <span className="mb-2">
            <b>Способ оплаты:</b> {orderValues.pay ? orderValues.pay : 'Не выбран'}
          </span>
        </div>
      ) : (
        <div className="w-full flex flex-col">
          <span className="mb-2">
            <b>Тип заказа: </b> {orderValues.orderType}
          </span>
          <span className="mb-2">
            <b>Номер телефона:</b> {orderValues.phoneNumber}
          </span>
          <span className="mb-2">
            <b>Комментарий:</b> {orderValues.comment ? orderValues.comment : 'Не указан'}
          </span>
          <span className="mb-2">
            <b>Заказ:</b>
          </span>
          <span className="text-sm mb-2">{orderValues.dishes}</span>
          <span className="text-sm mb-2"><b>Сумма:</b> {orderValues.totalPrice}</span>
          <span className="mb-2">
            <b>Дата:</b> {orderValues.checked ? shortDate : 'Сегодня'}
          </span>
          <span className="mb-2">
            <b>Время:</b> {orderValues.checked ? shortTime : 'Ближайшее'}
          </span>
        </div>
      )}
    </>
  );
};

export default OrderFinish;
