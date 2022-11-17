import React, { useContext } from "react";

import { useHistory } from "react-router-dom";

import AuthContext from "../components/store/AuthContext";

import "./login.css";

const Login = () => {
  const History = useHistory();
  const Authctx = useContext(AuthContext);
  const loginHandler = (event) => {
    event.preventDefault();
    const obj = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCx4Fvp-Si-PUI6sV4wqdCmpEuGlkn-a08",
      {
        method: "POST",
        body: JSON.stringify(obj),
        header: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((error) => {
            console.log(error.error.message);
            throw new Error(error.error.message);
          });
        }
      })
      .then((data) => {
        Authctx.loginHandler(data.idToken);
        History.replace("/products");
      })
      .catch((err) => {
        alert(err);
      });

    event.target.email.value = "";
    event.target.password.value = "";
  };
  return (
    <div className="maindiv">
      <div>
        <h2>Log In Here</h2>
      </div>
   <form onSubmit={loginHandler}>
        <div className="middiv">
          <label htmlFor="email" className="label">E-mail: </label>
          <input type="email" name="email" className="input"/>
        </div>
        <div className="middiv">
          <label htmlFor="password" className="label">Password: </label>
          <input type="password" name="password" className="input"/>
        </div>
        <div className="logbtn">
          <button type="submit" className="logbtnbtn">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
