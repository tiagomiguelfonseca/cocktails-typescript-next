import React from "react";
import { sportsMenu } from "../../features/menu/sports";
import LogoImage from "next/image";
import { CustomFlexContainer, CustomNavy, Logo, Nav, NavBarItem, NavBarItems, NavBarSubItem } from "./style";


interface SportsMenu {
  title: string;
  subTitle: string[];
}

export default function NavBar() {
  return (
    <Nav >
      <NavBarItems>
        <CustomFlexContainer>
          <Logo>
            <a href='/'>
              <LogoImage src="/logo32.png" alt='logo' width="250" height="100%" />
            </a>
          </Logo>
        </CustomFlexContainer>
        <CustomFlexContainer>
          { sportsMenu.map(({ title, subTitle }: SportsMenu, key) => {
            return (
              <NavBarItem key={ key }>
                <a href='#0' >
                  <CustomNavy>{ title }</CustomNavy>
                  
                </a>
              </NavBarItem>)
          })
          }
        </CustomFlexContainer>
      </NavBarItems>
    </Nav>
  );
}
