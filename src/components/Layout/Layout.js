import React from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Nevigation/Toolbar/Toolbar";
import SlideDrawer from "../Nevigation/SlideDrawer/SlideDrawer";

const Layout = props => (
  <React.Fragment>
    <Toolbar />
    <SlideDrawer />
    <main className={styles.Content}>{props.children}</main>
  </React.Fragment>
);
export default Layout;
