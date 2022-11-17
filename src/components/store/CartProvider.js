import React, { useState } from "react";

import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  // console.log(items);
  const addItemtoCartHandler = (item) => {
    let hasItems = false;
    const newArray = [...items];
    newArray.forEach((element, index) => {
      if (element.title === item.title) {
        hasItems = true;
      }
    });
    if (hasItems === true) {
      alert("Item Already Exists in the Cart!!!");
    } else {
      setItems([...items, item]);
    }
  };

  const removeItemfromCartHandler = (title) => {
    const newArray = items.filter((item) => title !== item.title);
    setItems(newArray);
  };

  const increaseQty = (title) => {
    const newArray = [...items];
    console.log(newArray);
    newArray.forEach((element, index) => {
      if (element.title === title) {
        newArray[index].quantity = Number(newArray[index].quantity) + 1;
      }
    });
    setItems(newArray);
  };

  const decreaseQty = (title) => {
    const newArray = [...items];
    console.log(newArray);
    newArray.forEach((element, index) => {
      if (element.title === title) {
        if (newArray[index].quantity > 1)
          newArray[index].quantity = Number(newArray[index].quantity) - 1;
        setItems(newArray);
      }
    });
  };

  const placingOrder = () => {
    setItems([]);
    alert(
      "Order has been successfully placed !!!!, Keep shopping from the Biker Zone"
    );
  };

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
      {/* {console.log(cartContext.items, "After-Rerendering !!!!!")} */}
    </CartContext.Provider>
  );
};

export default CartProvider;
