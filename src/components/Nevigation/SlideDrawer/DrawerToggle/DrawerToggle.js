import React from "react";
import classes from "./DrawerToggle.module.css";
const drwerToggle = props => {
  return (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default drwerToggle;
