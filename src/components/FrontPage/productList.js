import { useContext,  } from "react";

import { Link } from "react-router-dom";

import "./ProductList.css";

import CartContext from "../store/CartContext";

const ProductList = (props) => {
  const Cartctx = useContext(CartContext);

  const addToCart = (event) => {
    event.preventDefault();
    Cartctx.addItem({ ...props.products, quantity: 1 });
  };
  let productId = `products/${props.products.id}`
  return (
    <div className="albums">
      <h3 className="title"><Link to={productId} className='prodlink'>{props.products.title}</Link></h3>
      <img
        className="images"
        src={props.products.imgsrc}
        alt={props.products.title}
      />
      <div className="price">
        <h4 className="amount">${props.products.price}</h4>
        <button className="addcart" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
