import { Fragment, useContext } from "react";

import CartContext from "../store/CartContext";

import "./CartItem.css";

const CartItem = (props) => {
  const Cartctx = useContext(CartContext);
  const removeItemfromCart = (event) => {
    Cartctx.removeItem(event.target.id);
  };
  let totalAmount = 0;
  const ItemList = props.products.map((product) => {
    const increaseQty = event => {
    Cartctx.increaseQty(event.target.id)
    }
    const decreaseQty = event => {
      Cartctx.decreaseQty(event.target.id)
    }
    totalAmount += product.price * product.quantity;
    return (
      <div className="items" id={product.title}>
        <span className="span">{product.title}</span>
        <span className="span">
          <img src={product.imgsrc} alt={product.title} className="image" />
        </span>
        <span className="span">${product.price}</span>
        <span>{product.quantity}</span>
        <div className="valdiv">
          <button className="valbtn" onClick={increaseQty} id={product.title}>+</button>
          <button className="valbtn" onClick={decreaseQty} id={product.title}>-</button>
        </div>
        <span className="span">
          <button
            className="removebtn"
            id={product.title}
            onClick={removeItemfromCart}
          >
            Remove
          </button>
        </span>
      </div>
    );
  });

  return (
    <Fragment>
      {ItemList}{" "}
      <div className="total-div">
        <span className="total">Total : </span>
        <span className="total">${totalAmount}</span>
      </div>
    </Fragment>
  );
}; 

export default CartItem;
