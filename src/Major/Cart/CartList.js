import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cartlist = () => {
  const ctx = useContext(CartContext);

  const name = ctx.cartitems.cartItemname[0];
  // const quantity = ctx.cartitemQuantity;
  // const price = ctx.cartItemPrice;
  // const total = ctx.totalAmount;
  // const itemNumbers = ctx.cartitem.reduce((curNumber, item) => {
  //   return curNumber + item.quantity;
  // }, 0);

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Quantity: dummy</h3>
      <h3>Price: dummy name</h3>
      <h3>Total: dummy name</h3>
    </div>
  );
};
export default Cartlist;
