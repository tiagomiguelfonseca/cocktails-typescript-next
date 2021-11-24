import React from "react";
import { sportsMenu } from "src/views/Feature/sports";
import logo from "../../assets/images/logo32.png";
import { CustomFlexContainer, CustomNavy, Logo, Nav, NavBarItem, NavBarItems, NavBarSubItem } from "./style";

interface SportsMenu {
  title: string;
  subTitle: string[]
}


export default function NavBar() {


  
  return (
    <Nav >
      <NavBarItems>
        <CustomFlexContainer>
          <Logo>
            <a href='/'>
              <img src={ logo } alt='logo' width="250" />
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
