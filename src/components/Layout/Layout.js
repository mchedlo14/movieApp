import React, { Children } from "react";
import Header from "./Header/Header.js";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;