import styled from "styled-components";

export const LayoutWrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100%;
`;

const Article = styled.article`
  padding: 10px 0;
  margin-bottom: 40px;
`;

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const Split = styled(Article)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    flex-direction: row;
  }
`;

export const Row = styled(Article)`
  *:first-child {
    margin-bottom: 10px;
  }
`;

export const MainContainer = styled.div`
  padding: 0 ${(props) => props.theme.containerPadding};
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;
  height: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;