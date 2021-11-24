import styled from "styled-components";

interface CocktailListProps {
    className?: string;
    slice?: number;
    image?: string;
    title?: string;
  }

export const CocktailListStyled = styled.div<CocktailListProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 30px;
`;
