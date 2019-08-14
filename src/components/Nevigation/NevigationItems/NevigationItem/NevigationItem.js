import React from "react";
import classes from "./NevigationItem.module.css";
const nevigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default nevigationItem;
