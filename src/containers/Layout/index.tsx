import React from "react";
import NavBar from "../../components/NavBar";
import { LayoutWrapper } from "./styles";
import AllSportsBar from "../../components/AllSportsBar";


const Layout:any = ({children}) => {
  return (
    <LayoutWrapper>
      <NavBar />
      {children}
    </LayoutWrapper>
    )
}

export default Layout;
