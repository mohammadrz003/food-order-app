import React, { useRef, useState } from "react";

import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = ({ onAddToCartHandler }) => {
  const inputAmountRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);
  const inputId = Math.random().toString();

  const submitHandler = (e) => {
    e.preventDefault();

    const amountValue = +inputAmountRef.current.value;
    if (amountValue < 1 || amountValue > 5) {
      setIsAmountValid(false);
      return;
    }

    onAddToCartHandler(amountValue);
    inputAmountRef.current.value = "1";
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: `amount_${inputId}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit" className={styles.form_button}>
        Add
      </button>
      {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
