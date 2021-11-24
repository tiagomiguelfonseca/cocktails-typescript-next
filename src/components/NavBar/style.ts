import styled from "styled-components";
import { FlexContainer } from "../../containers/Layout/styles";
// import { Navy } from "../Typography";

export const Nav = styled.nav`
  top: 0;
  position: sticky;
  height: ${(props) => props.theme.navHeight};
  background: transparent;
  max-width: 1170px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

export const NavBarItems = styled.ul`
  letter-spacing: 0.6px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li + li {
    margin-left: 45px;
  }
  padding: 5px 12px;
  margin: 0;
`;

export const NavBarItem = styled.li`
  padding: 0px 10px;
  &:active {
    li + li {
      margin-left: 45px;
    }
    border-radius: 3px;
    color: ${(props) => props.theme.colours.defaultWhite};
    display: inline-block;
    background-color: ${({ theme }) => theme.colours.maroonFlush};
    background-size: 5px 12px;
  }
  &:hover {
    border-radius: 3px;
    color: ${({ theme }) => theme.colours.mainBrown};
    display: inline-block;
    background-color: ${({ theme }) => theme.colours.maroonFlush};
    padding: 0px 10px;
  }
  a:visited {
    color:${({ theme }) => theme.colours.defaultWhite};
  }
`;
export const NavBarSubItem = styled.li`
display: flex
`;


export const CustomFlexContainer = styled(FlexContainer)`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
&:img{
  width: 30%;
}
`;

export const Badge = styled.span`
  background-color: red;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  padding: 3px 7px;
`;

export const CustomNavy = styled.h1``;
