import React from "react";

import { Link } from "react-router-dom";

import "./header.css";

import CartButton from "../Layout/CartBtn";

const Header = (props) => {
  return (
    <header className="header">
      <Link className="anchor" to='/home'>Home</Link>
      <Link className="anchor" to='/store'>Store</Link>
      <Link className="anchor" to='/about'>About</Link>
      <CartButton cartFunc={props.cartFunc}/>
    </header>
  );
};

export default Header;
