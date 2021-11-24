import styled from "styled-components";
import { Paragon } from '../../containers/Typography/index';

interface CocktailProps {
  className?: string;
  type?: string;
  image?: string;
  title?: string;
}

export const CocktailCardType = styled.div<CocktailProps>`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const CocktailCardText = styled(Paragon)<CocktailProps>`

  text-align: center;
`;

export const CocktailCardImage = styled.div<CocktailProps>`
  background-size: 250px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  height: 250px;
`;