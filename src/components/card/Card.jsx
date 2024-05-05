import React from "react";
import rating from "../../assets/images/rating.svg";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Card = ({ data }) => {
  return (
    <>
      {data?.map((el) => (
        <div key={el.id} className="card">
          <div className="card-img">
            <div className="card-hover">
              <button>
                <FaRegHeart />
              </button>
              <button>
                <HiOutlineShoppingCart />
              </button>
            </div>
            <img src={el.img} alt="" />
          </div>
          <div className="card-info">
            <h1>{el.title}</h1>
            <img src={rating} alt="" />
            <div className="card-price">
              <h3>${el.price}</h3>
              <h4>${el.oldPrice}</h4>
              <h3 className="card-price-dis">{el.discount}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
