import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseQty: (item) => {},
  decreaseQty: (item)  => {},
  placingOrder: () => {}
});

export default CartContext;