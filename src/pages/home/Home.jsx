import React from "react";
import "./Home.css";
import { HERO_BANNER, LATEST_CARD, SUPPORT_BANNER } from "../../context";
import adidasBanner from "../../assets/images/adidas-banner.svg";
import featuredCard from "../../assets/images/featured-img.svg";
import rating from "../../assets/images/rating.svg";
import { useGetProductsQuery } from "../../context/productApi";
import Card from "../../components/card/Card";

const Home = () => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <main>
      <div className="hero">
        <div className="container hero-all">
          <h1>Super Flash Sale 50% Off</h1>
        </div>
      </div>
      <div className="hero-banner">
        <div className="container">
          <div className="hero-banner-wrapper">
            {HERO_BANNER?.map((el) => (
              <div
                key={el.id}
                style={{
                  backgroundImage: `url(${el.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="hero-banner-card"
              >
                <div className="hero-banner-card-top">
                  <h2>{el.title}</h2>
                  <h1>$299,43</h1>
                </div>
                <div className="hero-banner-card-bottom">
                  <p>$534,33</p>
                  <h4>24% Off</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="container">
          <div className="card-top">
            <h1>BEST SELLER</h1>
            <ul className="card-list">
              <li>All</li>
              <li>Bags</li>
              <li>Sneakers</li>
              <li>Belt</li>
              <li>Sunglasses</li>
            </ul>
          </div>
          <div className="cards-bottom">
            <div className="card-wrapper">
              <Card data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="adidas-banner">
        <div className="container adidas-banner-all">
          <div className="adidas-banner-left">
            <h1>Adidas Men Running Sneakers</h1>
            <p>Performance and design. Taken right to the edge.</p>
            <button>SHOP NOW</button>
          </div>
          <div className="adidas-banner-right">
            <img src={adidasBanner} alt="" />
          </div>
        </div>
      </div>
      <div className="support-banner">
        <div className="container">
          <div className="support-wrapper">
            {SUPPORT_BANNER?.map((el) => (
              <div key={el.id} className="support-card">
                <img src={el.img} alt="" />
                <h1>{el.title}</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="latest">
        <div className="container">
          <div className="latest-all">
            <h1>LATEST NEWS</h1>
            <div className="latest-wrapper">
              {LATEST_CARD?.map((el) => (
                <div key={el.id} className="latest-card">
                  <img src={el.img} alt="" />
                  <div className="latest-card-info">
                    <p>01 Jan, 2015</p>
                    <h1>{el.title}</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="container">
          <div className="featured-top">
            <h1>FEATURED PRODUCTS</h1>
          </div>
          <div className="featured-bottom">
            <div className="featured-wrapper">
              <div className="featured-card">
                <div className="featured-card-img">
                  <img src={featuredCard} alt="" />
                </div>
                <div className="featured-card-info">
                  <p>Blue Swade Nike Sneakers</p>
                  <img src={rating} alt="" />
                  <div className="featured-card-price">
                    <h3>$499</h3>
                    <p>$599</p>
                  </div>
                </div>
              </div>
              <div className="featured-card">
                <div className="featured-card-img">
                  <img src={featuredCard} alt="" />
                </div>
                <div className="featured-card-info">
                  <p>Blue Swade Nike Sneakers</p>
                  <img src={rating} alt="" />
                  <div className="featured-card-price">
                    <h3>$499</h3>
                    <p>$599</p>
                  </div>
                </div>
              </div>
              <div className="featured-card">
                <div className="featured-card-img">
                  <img src={featuredCard} alt="" />
                </div>
                <div className="featured-card-info">
                  <p>Blue Swade Nike Sneakers</p>
                  <img src={rating} alt="" />
                  <div className="featured-card-price">
                    <h3>$499</h3>
                    <p>$599</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-input">
              <input type="text" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
