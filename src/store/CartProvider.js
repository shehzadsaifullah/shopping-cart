import CartContext from "./cart-context";
import { useState, useEffect } from "react";

const CartProvider = (props) => {
  // const defaultObjectforContext = {
  //   cartItemname: "",
  //   cartItemquantity: "",
  //   cartItemprice: "",
  // };
  const [item, setItem] = useState({});
  const [total, setTotal] = useState(0);

  //this function should add items to the cart context from list of food items
  const setCartItem = (id, name, quantity, price) => {
    setItem({
      ...item,
      cartItemId: id,
      cartItemname: name,
      cartItemquantity: quantity,
      cartItemprice: price,
    });
  };

  //update the total cart cash when item is add to cart
  const setTotalAmount = (ttl) => {
    setTotal((ttl += total));
  };

  const removeCartItem = () => {};
  const addCartItem = (id, name, quantity, price) => {
    console.log("hello add button");
  };

  const cartContext = {
    cartitem: item,
    totalAmount: total,
    setCartItem: setCartItem,
    setTotalAmount: setTotalAmount,
    addCartItem: addCartItem,
    removeCartItem: removeCartItem,
  };
  // console.log(item);
  useEffect(() => {
    setItem(item);
  }, [item]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
