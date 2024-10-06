import React from "react";
import "./Card.css";
const Card = ({ title, price, src }) => {
  return (
    <>
      <div className="card">
        <img className="card-img" src={src} alt="" />
        <div className="card-content">
          <div className="price-con">
            <p className="card-price">Rs {price}</p>
            <i class="fa-regular fa-heart fa-xl"></i>
          </div>
          <p className="card-title">{title}</p>
          <p className="card-location">Gulshan-e-Iqbal, Karachi</p>
          <p className="card-time">2 weeks ago</p>
        </div>
      </div>
    </>
  );
};

export default Card;
