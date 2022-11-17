import React,{useContext} from "react";

import AuthContext from "../store/AuthContext";

import { Link, useHistory } from "react-router-dom";

import "./header.css";

import CartButton from "../Layout/CartBtn";

const Header = (props) => {
  const Authctx = useContext(AuthContext)

  const history = useHistory()
  
  const isLoggedIn = Authctx.isLoggedIn

  const LogoutHandler = () => {
    Authctx.logoutHandler()
    history.replace('/login')
  }
  return (
    <header className="header">
      <Link className="anchor" to='/home'>Home</Link>
      <Link className="anchor" to='/products'>Store</Link>
      <Link className="anchor" to='/about'>About</Link>
      <Link className="anchor" to='/contact'>Contact Us</Link>
      {!isLoggedIn && <Link className="anchor" to='/login'>Log In</Link>}
      {isLoggedIn && <button onClick={LogoutHandler} className='logoutbtn'>Logout</button>}
      {isLoggedIn && <CartButton cartFunc={props.cartFunc}/> }
    </header>
  );
};

export default Header;
