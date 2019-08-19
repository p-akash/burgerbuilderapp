import React, { useState } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Nevigation/Toolbar/Toolbar";
import SlideDrawer from "../Nevigation/SlideDrawer/SlideDrawer";

const Layout = props => {
  const [drawer, setdrawer] = useState({ showSideDrawer: true });
  const sideDrawerClosedHandler = () => {
    setdrawer({ showSideDrawer: false });
  };
  const sideDrawerToggleHandler = () => {
    setdrawer(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  return (
    <React.Fragment>
      <Toolbar DrawerToggleClicked={sideDrawerToggleHandler} />
      <SlideDrawer
        open={drawer.showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
};
export default Layout;
