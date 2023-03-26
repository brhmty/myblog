import React, { ReactNode } from "react";
import NavBar from "./NavBar";

const LayoutWrapper = (props: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
};

export default LayoutWrapper;
