import React from "react";
import pic from "../../assets/img/pic1.jpg";

const Menu = ({item}) => {

  return (
    <div className="w-full flex flex-col justify-start mt-6">
      <div className=" flex flex-wrap justify-start ">
          {item.map((i, index) => (
            <div className="w-5/12 flex flex-col items-center rounded-10 ml-5" key={index}>
              <img src={pic} className="rounded-md" alt="pic" />
              <div className="item_name">
                <span className="name">{i.name}</span>
              </div>
              <div className="columns">
                <span>{i.serving ? i.serving : ``}</span>
                <span>{i.price.max ? i.price.max : i.price} ₽</span>
              </div>
              <button>Заказать</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;