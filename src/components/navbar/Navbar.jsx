import React from "react";
import "./Navbar.css";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import navLogo from "../../assets/images/nav-logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="nav-all">
          <div className="nav-top">
            <div className="nav-top-selects">
              <select className="nav-top-select-language" name="" id="">
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="uz">UZ</option>
              </select>
              <select className="nav-top-select-money" name="" id="">
                <option value="usd">USD</option>
                <option value="rub">RUB</option>
                <option value="eu">EU</option>
              </select>
            </div>
            <div className="nav-top-items">
              <div className="nav-top-items-icons">
                <NavLink to={"/login"}>
                  <FaRegUser />
                </NavLink>
                <NavLink to={"/wishlist"}>
                  <FaRegHeart />
                </NavLink>
                <NavLink to={"/cart"}>
                  <FiShoppingCart />
                </NavLink>
              </div>
              <div className="nav-top-items-search">
                <p>Items</p>
                <div className="nav-top-items-search-left">
                  <p>$0.00</p>
                  <IoSearchSharp />
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bottom">
            <div className="nav-bottom-logo">
              <NavLink to={"/"}>
                <img src={navLogo} alt="" />
                <h1>E-comm</h1>
              </NavLink>
            </div>
            <div className="nav-bottom-pages">
              <ul className="nav-bottom-list">
                <NavLink to={"/"} className="nav-bottom-items-a">
                  <li>HOME</li>
                </NavLink>
                <NavLink to={"/bags"} className="nav-bottom-items-a">
                  <li>BAGS</li>
                </NavLink>
                <NavLink to={"/sneakers"} className="nav-bottom-items-a">
                  <li>SNEAKERS</li>
                </NavLink>
                <NavLink to={"/belt"} className="nav-bottom-items-a">
                  <li>BELT</li>
                </NavLink>
                <NavLink to={"/contact"} className="nav-bottom-items-a">
                  <li>CONTACT</li>
                </NavLink>
              </ul>
              <input type="search" placeholder="search" />
            </div>
          </div>
          <div className="nav-bottom-category">
            <NavLink to={"/login"}>
              <FaRegUser />
            </NavLink>
            <NavLink to={"/wishlist"}>
              <FaRegHeart />
            </NavLink>
            <NavLink to={"/cart"}>
              <FiShoppingCart />
            </NavLink>
            <IoSearchSharp />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
