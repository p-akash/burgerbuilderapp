import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import NevigationItems from "../NevigationItems/NevigationItems";
import DrawerToggle from "../SlideDrawer/DrawerToggle/DrawerToggle";
const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.DrawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav className={classes.DesktopOnly}>
        <NevigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
