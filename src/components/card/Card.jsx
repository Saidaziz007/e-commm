import React from "react";
import rating from "../../assets/images/rating.svg";
import "./Card.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { toggleWishlist } from "../../context/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/cartSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.value);

  return (
    <>
      {data?.map((el) => (
        <div key={el.id} className="card">
          <div className="card-img">
            <div className="card-hover">
              <button onClick={() => dispatch(toggleWishlist(el))}>
                {wishList.some((s) => s.id === el.id) ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
              </button>
              <button onClick={() => dispatch(addToCart(el))}>
                <HiOutlineShoppingCart />
              </button>
            </div>
            {el.images && el.images.length > 0 && (
              <img src={el.images[0]} alt="" />
            )}
          </div>
          <div className="card-info">
            <Link to={`/product/${el.id}`}>
              <h1>{el.title}</h1>
            </Link>
            <img src={rating} alt="" />
            <div className="card-price">
              <h3>${el.price}</h3>
              <h4>${el.price * 2}</h4>
              <h3 className="card-price-dis">{el.discount}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
