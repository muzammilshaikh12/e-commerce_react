import React, { Fragment } from "react";

import Modal from "../UI/Modal";

import CartItem from "./CartItems";

import "./Cart.css";

const Cart = (props) => {
  return (
    <Fragment>
      <Modal>
        <h1 className="cart-title">CART</h1>
        <div className="cart-header">
        <span className="title">Title</span>
        <span className="price">Price</span>
        <span className="quantity">Quantity</span>
        </div>
        <CartItem />
        <div className="actions">
          <button className="button--alt" onClick={props.cartFunc}>
            Close
          </button>
          <button className="order">Order</button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
