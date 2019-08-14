import React from "react";
import classes from "./NevigationItems.module.css";
import NevigationItem from "./NevigationItem/NevigationItem";
const nevigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NevigationItem link="/" active>
        Burger Builder
      </NevigationItem>
      <NevigationItem link="/">Chackout</NevigationItem>
    </ul>
  );
};

export default nevigationItems;
