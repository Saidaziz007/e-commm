import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container login-1">
        <div className="login-all">
          <div className="login-input-1">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div className="login-input-1">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
