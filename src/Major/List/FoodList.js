import Card from "./Card";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const FoodList = (props) => {
  return (
    <div>
      {DUMMY_MEALS.map((item) => (
        <Card listitem={item}></Card>
      ))}
    </div>
  );
};
export default FoodList;
