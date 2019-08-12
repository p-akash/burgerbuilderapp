import React from "react";
import styles from "./Layout.module.css";

const Layout = props => (
  <React.Fragment>
    <dir>Toolbar</dir>
    <main className={styles.Content}>{props.children}</main>
  </React.Fragment>
);
export default Layout;
