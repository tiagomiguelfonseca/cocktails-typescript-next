import { Row } from "../../containers/Layout/styles";
import styled from "styled-components";
import { FlexContainer } from "../../containers/Layout/styles";
import { BiSearch } from "react-icons/bi";

export const CustomRow = styled(Row)`
  padding: 10px 0;
  margin-top: 40px;
  border-top: solid 1px #ccc;
`;

export const CustomFlexContainer = styled(FlexContainer)`
  column-gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export const ImageContainer = styled.img`
  width: 200px;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
`;

export const Input = styled.input`
  /* width: 50%; */
  padding: 10px 100px 10px 10px;
  margin-top: 30px
`;

export const Span = styled.span`
  text-align: center;
`;

export const Box = styled.div`
  display: flex;
`;

export const CustomBiSearch = styled(BiSearch)`
position: absolute;
width: 30px;
top: 50%;
height: auto;
color: black;
right: 0;
`;

export const Form = styled.form`
  position: relative;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;

`;
