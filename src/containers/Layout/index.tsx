import React from "react";
import NavBar from "../../components/NavBar";
import { LayoutWrapper } from "./styles";


const Layout = ({ children }: { children: any }) => {
  return (
    <LayoutWrapper>
      <NavBar />
      { children }
    </LayoutWrapper>)
}

export default Layout;
