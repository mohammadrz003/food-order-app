import React, { useContext } from "react";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../contexts/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const reduceItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const increaseItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartitems = (
    <ul className={styles.cart_items}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onRemove={reduceItemHandler.bind(null, item.id)}
            onAdd={increaseItemHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onConfirm={props.closeCartModal}>
      {cartitems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          onClick={props.closeCartModal}
          className={styles["button--alt"]}
        >
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
