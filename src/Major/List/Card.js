import CartContext from "../../store/cart-context";
import { useContext, useRef, useState } from "react";

const Card = (props) => {
  const inputQuantityValue = useRef();
  // use context here
  const ctx = useContext(CartContext);

  const addToCartHandler = () => {
    console.log(props.listitem.name);
    ctx.setCartItem(
      props.listitem.name,
      inputQuantityValue.current.value,
      props.listitem.price
    );
    ctx.setTotalAmount();
  };
  return (
    <div>
      <div>
        <ul>
          <div>{props.listitem.name}</div>
          <div>{props.listitem.description}</div>
          <div>{props.listitem.price}</div>
        </ul>
      </div>
      <div>
        <label>Quantity </label>
        <input
          type="number"
          min="0"
          max="5"
          defaultValue="0"
          ref={inputQuantityValue}
        ></input>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};
export default Card;
