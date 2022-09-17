import React, { useContext } from "react";

import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../contexts/cart-context";

const MealItem = ({ meal }) => {
  const CartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: amount,
    });
  };

  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3 className={styles.meal_title}>{meal.name}</h3>
        <p className={styles.meal_description}>{meal.description}</p>
        <div className={styles.meal_price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCartHandler={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
