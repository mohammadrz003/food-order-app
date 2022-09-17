import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label className={styles.input_label} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className={styles.input_input}
        type="number"
      />
    </div>
  );
});

export default Input;
