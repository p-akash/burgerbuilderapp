import React from "react";
import Logo from "../../UI/Logo/Logo";
import classes from "./SlideDrawer.module.css";
import NavigationItem from "../NevigationItems/NevigationItems";
const slideDrawer = props => {
  return (
    <div className={classes.SlideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav>
        <NavigationItem />
      </nav>
    </div>
  );
};

export default slideDrawer;
