import React, { Fragment,useContext} from "react";

import Modal from "../UI/Modal";

import CartItem from "./CartItems";

import CartContext from "../store/CartContext";

import "./Cart.css";

const Cart = (props) => {
  const cartctx = useContext(CartContext)

  const placingOrder = () => {
    cartctx.placingOrder()
  }

  const Products = cartctx.items
   return (
    <Fragment>
      <Modal>
        <h1 className="cart-title">CART</h1>
        <div className="cart-header">
          <span className="title">Title</span>
          <span className="price">Price</span>
          <span className="quantity">Quantity</span>
        </div>
        <CartItem products={Products}/>
        <div className="actions">
          <button className="button--alt" onClick={props.cartFunc}>
            Close
          </button>
          <button className="order" onClick={placingOrder}>Order</button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
