import React, { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="contact-all">
        <div className="contact-left">
          <h1>get in touch</h1>
          <p>contact@e-comm.ng</p>
          <p>+234 4556 6665 34</p>
          <p>
            20 Prince Hakerem Lekki <br /> Phase 1, Lagos.
          </p>
        </div>
        <div className="contact-right">
          <label htmlFor="">Fullname</label>
          <input type="text" placeholder="James Doe" />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="jamesdoe@gmail.com" />
          <label htmlFor="">Message</label>
          <textarea
            rows="10"
            name=""
            id=""
            placeholder="Type your message"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
