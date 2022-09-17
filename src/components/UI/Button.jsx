import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
