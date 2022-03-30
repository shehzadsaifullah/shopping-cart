import CartContext from "./cart-context";
import { useState, useEffect } from "react";

const CartProvider = (props) => {
  // const [item, setItem] = useState()
  const [itemName, setItemName] = useState();
  const [itemQuantity, setitemQuantity] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [total, setTotal] = useState();

  const setCartItem = (name, quantity, price) => {
    setItemName(name);
    setitemQuantity(quantity);
    setItemPrice(price);
  };

  const setTotalAmount = () => {
    setTotal(1000);
  };
  const cartContext = {
    cartitem: [],
    totalAmount: 0,
    setCartItem: setCartItem,
    setTotalAmount: setTotalAmount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
