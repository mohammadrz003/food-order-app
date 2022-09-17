import React, { Fragment } from "react";

import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import foodImage from "../../assets/food.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles.header_logo}>Logoname</h1>
        <HeaderCartButton onOpenCartModal={props.openCartModal} />
      </header>
      <div className={styles.image_container}>
        <img
          className={styles.image_container_img}
          src={foodImage}
          alt="different dishes"
        />
      </div>
    </Fragment>
  );
};

export default Header;
