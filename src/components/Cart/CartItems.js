import { Fragment } from "react";

import "./CartItem.css";

const CartItem = (props) => {
  const Products = [
    {
      title: "Yamaha R15 V4",
      price: 6500,
      imgsrc:
        "https://th.bing.com/th/id/OIP.qfJnfHY-eLAcfVPB8FNuQAHaEl?w=268&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      quantity: 1,
    },
    {
      title: "Kawasaki Ninja H2",
      price: 8500,
      imgsrc:
        "https://th.bing.com/th/id/OIP.UfJtQYOWXz4bKbeESgQyKwHaE8?w=293&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      quantity: 1,
    },
    {
      title: "Triumph Tiger",
      price: 9500,
      imgsrc:
        "https://th.bing.com/th/id/OIP.8DHpTFV4QvNEg8mLTRjqdAHaE1?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      quantity: 1,
    },
    {
      title: "Honda CBR 1000SR",
      price: 10500,
      imgsrc:
        "https://th.bing.com/th/id/OIP.tNNiwXduGeGz-hRlZfLj6QHaEH?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      quantity: 1,
    },
  ];

  const ItemList = Products.map((product) => {
    return (
      <div className="items" id={product.title}>
        <span className="span">{product.title}</span>
        <span className="span">
          <img src={product.imgsrc} alt={product.title} className="image" />
        </span>
        <span className="span">${product.price}</span>
        <span className="span">{product.quantity}</span>
        <span className="span">
          <button className="removebtn">Remove</button>
        </span>
      </div>
    );
  });

  return <Fragment>{ItemList}</Fragment>;
};

export default CartItem;
