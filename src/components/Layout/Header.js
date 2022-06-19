import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table full of different type of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
