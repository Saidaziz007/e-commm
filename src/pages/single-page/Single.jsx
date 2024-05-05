import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import rating from "../../assets/images/rating.svg";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Single.css";
import Card from "../../components/card/Card";
import { useGetProductsQuery } from "../../context/productApi";

const API_URL =
  "https://6634b1ce9bb0df2359a2693f.mockapi.io/saidaziz-api/e-comm";

const Single = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const { data } = useGetProductsQuery();
  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="single">
      <div className="container">
        <div className="single-all">
          <div className="single-top">
            <div className="single-top-1">
              <div className="single-top-left">
                <img src={product?.img} alt="" />
                <div className="single-top-left-bottom">
                  <img src={product?.img} alt="" />
                  <img src={product?.img} alt="" />
                  <img src={product?.img} alt="" />
                  <img src={product?.img} alt="" />
                </div>
              </div>
              <div className="single-top-right">
                <h1>{product?.title}</h1>
                <div className="single-top-right-1">
                  <img src={rating} alt="" />
                  <p>0 reviews</p>
                  <h3>Submit a review</h3>
                </div>
                <hr />
                <div className="single-top-right-2">
                  <h3>${product.price}</h3>
                  <h4>${product.oldPrice}</h4>
                  <h3 className="card-price-dis">{product.discount}</h3>
                </div>
                <div className="single-top-right-3">
                  <div className="single-top-right-3-1">
                    <h4>Availability:</h4>
                    <h4>Category:</h4>
                    <h4>Free shipping</h4>
                  </div>
                  <div className="single-top-right-3-2">
                    <h4>In stock</h4>
                    <h4>Accessories</h4>
                    <h4>Free shipping</h4>
                  </div>
                </div>
                <hr />
                <div className="single-top-right-4">
                  <h4>Select Color:</h4>
                  <button className="single-btn-1"></button>
                  <button className="single-btn-2"></button>
                  <button className="single-btn-3"></button>
                  <button className="single-btn-4"></button>
                </div>
                <div className="single-top-right-5">
                  <h4>Size</h4>
                  <select name="" id="">
                    <option value="">XS</option>
                    <option value="">XL</option>
                    <option value="">2XL</option>
                    <option value="">3XL</option>
                  </select>
                </div>
                <div className="single-top-right-6">
                  <div className="single-top-right-6-1">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                  <div className="single-top-right-6-2">
                    <button>
                      <BsCart3 />
                      Add To Cart
                    </button>
                    <button>
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
                <hr />
                <div className="single-top-right-7">
                  <button className="single-btn-facebook">
                    <FaFacebookF />
                    Share on Facebook
                  </button>
                  <button className="single-btn-twitter">
                    <FaTwitter />
                    Share on Twitter
                  </button>
                </div>
              </div>
            </div>
            <div className="single-top-2">
              <h2>BEST SELLER</h2>
              <div className="card">
                <div className="card-img">
                  <img src={product.img} alt="" />
                </div>
                <div className="card-info">
                  <h1>{product.title}</h1>
                  <img src={rating} alt="" />
                  <div className="card-price">
                    <h3>${product.price}</h3>
                    <h4>${product.oldPrice}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-bottom">
            <h1 className="single-bottom-h1">RELATED PRODUCTS</h1>
            <div className="single-bottom-wrapper">
              <Card data={data.slice(2, 6)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
