import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import NevigationItems from "../NevigationItems/NevigationItems";
const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav>
        <NevigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
