import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cartindi.module.css";
import React from "react";

const Cartlist = () => {
  const ctx = useContext(CartContext);

  const [cartListitems, setCartListitems] = useState([]);

  useEffect(() => {
    setCartListitems((oldcart) => {
      return [ctx.cartitem, ...oldcart];
    });
  }, [ctx.cartitem]);

  //console.log(ctx.totalAmount);
  //this should increment the item if add button is in pressed in cart
  
  /*const additemHandler = (id) => {
    cartListitems.map((item) => {
      if (item.cartItemId === id) {
        //     //setCartListitems((oldcart) => {});
        const x = item.cartItemquantity + 1;
        console.log(x);
        ctx.addCartItem(
          item.cartItemId,
          item.cartItemname,
          x,
          item.cartItemprice
        );
      }
    });
  };
  <button onClick={additemHandler}>add button</button>
  */

  return (
    <div>
      <div>{ctx.totalAmount}</div>
      <div>
        {cartListitems.map((item) => (
          <ul className={classes.unorderedlist}>
            <div>{item.cartItemId}</div>
            <div>{item.cartItemname}</div>
            <div>{item.cartItemquantity}</div>
            <div>{item.cartItemprice}</div>
            <div>
             
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default Cartlist;
