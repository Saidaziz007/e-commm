import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(API_URL, { username, password })
      .then((response) => {
        const data = response.data;
        if (data.message === "Error") {
          console.log("error");
          toast.error("Malumot notog'ri kiritildi");
        } else {
          console.log(data);
          localStorage.setItem("token", data.token);
          window.open("/admin", "_self");
          toast.success("Xush kelibsiz");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        toast.error("Malumot notog'ri kiritildi");
      });
  };
  return (
    <div className="login">
      <div className="container login-1">
        <div className="login-all">
          <form onSubmit={handleSubmit} action="">
            <div className="login-input-1">
              <label htmlFor="">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="login-input-1">
              <label htmlFor="">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
