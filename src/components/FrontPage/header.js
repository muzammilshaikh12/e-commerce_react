import React from "react";

import "./header.css";

import CartButton from "../Layout/CartBtn";

const Header = (props) => {
  return (
    <header className="header">
      <span className="anchor">Home</span>
      <span className="anchor">Store</span>
      <span className="anchor">About</span>
      <CartButton cartFunc={props.cartFunc}/>
    </header>
  );
};

export default Header;
