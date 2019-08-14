import React from "react";
import Logo from "../../UI/Logo/Logo";
import classes from "./SlideDrawer.module.css";
import NavigationItem from "../NevigationItems/NevigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
const slideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItem />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default slideDrawer;
