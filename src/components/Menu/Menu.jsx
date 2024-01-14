import React, { useState } from "react";
import { data } from "../../assets/data/data.js";
import pic from "../../assets/img/pic.jpg";

const Menu = () => {
  const firstKey = Object.keys(data)[0];

  const [item, setItem] = useState(data[firstKey]);

  return (
    <div className="w-4/5 flex flex-row justify-between mt-6">
      <div className="w-30 flex flex-col justify-around bg-white rounded-xl text-dark">
        {Object.keys(data).map((category, index) => (
          <button
            key={index}
            className="menu-subtitle"
            onClick={(e) => setItem(data[category])}
          >
            {category}
          </button>
        ))}
      </div>
      <div className=" flex flex-wrap ">
          {item.map((i, index) => (
            <div className="w-72 flex flex-col items-center" key={index}>
              <img src={pic} className="" alt="pic" />
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