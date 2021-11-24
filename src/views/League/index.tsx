import React from "react";
import { connect } from "react-redux";
import { IAppState } from "src/store";
import { FlexContainer, Main, Aside, Text, Image } from "./styles";
import { useState } from "react";
import { useSearchParams, useNavigate, createSearchParams, Link } from 'react-router-dom';
import Layout from '../../containers/Layout'
import { MainContainer } from 'src/containers/Layout/styles'


interface CardPageProps {
  strTeam?: string;
  strTeamBadge?: string;
}

// const standardQuery = useDebounce(queryKey, 500)

const LeagueDetail = (props: CardPageProps) => {

  const [queryKey, setQueryKey] = useState("");
  const [searchParams] = useSearchParams();

  function appendSearchParams(obj: any) {
    const sp = createSearchParams(searchParams);

    Object.entries(obj).forEach(([key, value]: any) => {
      if (Array.isArray(value)) {
        sp.delete(key);
        value.forEach((v) => sp.append(key, v));
      } else if (value === undefined) {
        sp.delete(key);
      } else {
        sp.set(key, value);
      }
    });
    return sp;
  }

  const { idLeague, strSport, strFanart1, strBadge }:any = props;

  return (
    <Layout>
      <MainContainer>
        <FlexContainer>
          <Aside>
            <Text Ttitle='Ttitle'>Name: </Text>
            <Text title='title'></Text>
            <Link to={ `/team?${appendSearchParams({ "": idLeague })}` }>{ idLeague }</Link>
            <Link to={ `/team/${idLeague}` }>{ idLeague }</Link>
            <Text Ttitle='Ttitle'>Badge: </Text>
            <Image src={ strBadge } alt='' />
          </Aside>
          <Main></Main>
        </FlexContainer>
      </MainContainer>
    </Layout>
  );
};

const mapStateToProps = (store: IAppState) => {
  return {
    sportDetail: store.sportsState.sportDetail,
  };
};

export default connect(mapStateToProps)(LeagueDetail);
