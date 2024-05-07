import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import "./Wishlist.css";

const Wishlist = () => {
  const wishList = useSelector((state) => state.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wishlist">
      <div className="container">
        <div className="wishlist-all">
          <div className="wishlist-top">
            <h1>Wishlist ({wishList.length})</h1>
          </div>
          <div className="wishlist-bottom">
            {wishList.length ? (
              <Card data={wishList} />
            ) : (
              <div className="empty">
                <img
                  src="https://img.freepik.com/free-vector/flat-simple-buy-nothing-day-logo_742173-10787.jpg"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
