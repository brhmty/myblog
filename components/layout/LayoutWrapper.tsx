import React, { ReactNode } from "react";
import Navbar from "./NavBar";

const LayoutWrapper = (props: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};

export default LayoutWrapper;
