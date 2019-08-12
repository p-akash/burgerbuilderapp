import React from "react";
const Layout = props => (
  <React.Fragment>
    <dir>Toolbar</dir>
    <main>{props.children}</main>
  </React.Fragment>
);
export default Layout;
