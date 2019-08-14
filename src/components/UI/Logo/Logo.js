import React from "react";
import Image from "../../../assets/burger-logo.png";
import classes from "./Logo.module.css";
const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={Image} alt="Burger Logo" />
    </div>
  );
};

export default logo;
