import React from 'react'

const Delivery = () => {


  
  return (
    <div className='pt-6 pb-12 w-full flex flex-col items-start'>
      <h1 className="pl-6 text-title font-bold font-comfortaa mb-8">Доставка и оплата</h1>
      <div className='px-3 mb-8 flex flex-col text-sm font-comfortaa'>
        <h2 className='text-xl mb-3 font-semibold'>Для осуществления заказа Вам необходимо:</h2>

        <span>
          <b> Оформить заказ на сайте:</b> выбрать в меню интересующие вас блюда, добавить их в корзину, заполнить контактные данные в диалоговом окне и оформить заказ.
        </span>
        <span className='mb-3'>Или звонить по номеру <a href="tel:+79788796220">+7 (978) 879-62-20</a></span>
        <span  className='mb-3'>
          После получения заявки, <b> в течение 10 минут,</b> наш менеджер свяжется с вами по указанному номеру телефона для подтверждения заказа. С ним вы можете провести корректировку заказа и его стоимости, обсудить время доставки и прочие условия.
        </span>
        <span className='flex flex-col'>
          <b>ЕСЛИ НАШ МЕНЕДЖЕР НЕ СВЯЗАЛСЯ С ВАМИ В ТЕЧЕНИЕ 10 МИНУТ</b> по указанному вами номеру телефона, подтверждение о приеме заказа – ваш заказ считается не принятым в обработку. В этом случае вам необходимо проконтролировать состояние заказа, позвонив по телефону
          <a href="tel:+79788796220"><b>+7 (978) 879-62-20</b></a>.
        </span>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-xl mb-3 font-semibold self-start font-comfortaa pl-3'>Зона доставки:</h2>
        <iframe 
          title='Delivery zone'
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd42b53bf4349bd807ddc17e63d2786d0e1586d2e4146b363655281f190a2f1a&amp;source=constructor"
          className='h-[478px] w-[90%]'
          frameborder="0">
       </iframe>
      </div>
    </div>
  )
}

export default Delivery