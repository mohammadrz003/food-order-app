import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <div onClick={props.onConfirm} className={styles.backdrop} />
      <Card className={styles.modal_card}>{props.children}</Card>
    </Fragment>,
    document.getElementById("overlay")
  );
};

export default Modal;
