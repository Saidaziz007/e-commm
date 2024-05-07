import React, { useState } from "react";
import { IoMdCard } from "react-icons/io";
import { BsPaypal } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { clearCart } from "../../context/cartSlice";

let BOT_TOKEN = "7195277167:AAHEophVHUwf_O2Ra8wemtR1szCUsDYwLV8";
let CHAT_ID = "-4227583259";

const Checkout = ({ closeModal, data }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "";
    text += `Ismi: ${firstName} %0A`;
    text += `Familyasi: ${lastName} %0A`;
    text += `Email: ${email} %0A`;
    text += `Telefon: ${number} %0A`;
    text += `Address: ${address} %0A%0A`;

    let quantity = 1;
    data.forEach((el) => {
      text += `<b>Maxsulot: ${quantity}</b> %0A%0A`;
      text += `Nomi: ${el.title} %0A`;
      text += `Miqdori: ${el.quantity} %0A`;
      text += `Narxi: $${el.price} %0A%0A`;
      quantity++;
    });
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    closeModal(false);
    dispatch(clearCart());
  };
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-all">
          <button onClick={() => closeModal(false)}>
            <IoMdClose />
          </button>
          <h1>Make Payment</h1>
          <form onSubmit={handleSubmit} action="">
            <div className="checkout-1">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email Address"
              />
              <div className="checkout-1-1">
                <h1>Select Method of Payment</h1>
                <div className="checkout-1-1-1">
                  <div className="checkout-1-1-1-1">
                    <IoMdCard />
                    <h3>Credit Card Or Debit</h3>
                  </div>
                  <div className="checkout-1-1-1-1">
                    <BsPaypal />
                    <h3>Paypal</h3>
                  </div>
                  <div className="checkout-1-1-1-1">
                    <CiBank />
                    <h3>Bank Transfer</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-2">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name=""
                id=""
                placeholder="Address for Delivery"
              ></textarea>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                placeholder="Mobile Phone"
              />
            </div>
            <div className="checkout-btn">
              <button>Go to Payment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
