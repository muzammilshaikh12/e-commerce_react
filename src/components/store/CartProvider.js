import React, { useState } from "react";

import CartContext from "./CartContext";

const CartProvider = (props) => {
  console.log(props);
  const [items, setItems] = useState([]);

  const addItemtoCartHandler = (item) => {
    let hasItems = false;
    const newArray = [...items];
    newArray.forEach((element, index) => {
      if (element.title === item.title) {
        hasItems = true;
        }
    });
    if (hasItems === true) {
      alert('Item Already Exists in the Cart!!!')
    } else {
      setItems([...items, item]);
    }
  };

  const removeItemfromCartHandler = (title) => {
    const newArray =  items.filter(item=>title !== item.title)
    setItems(newArray)
  };

  const increaseQty = (name) => {};

  const decreaseQty = (name) => {};

  const placingOrder = () => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemtoCartHandler,
    removeItem: removeItemfromCartHandler,
    increaseQty: increaseQty,
    decreaseQty: decreaseQty,
    placingOrder: placingOrder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      {console.log(cartContext.items, "After-Rerendering !!!!!")}
    </CartContext.Provider>
  );
};

export default CartProvider;
