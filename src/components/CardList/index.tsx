import React from "react";
import { connect } from "react-redux";
import { IAppState } from "src/store";
import CardPage from "../../CardPage/index";

interface CardPageProps {
  strTeam?: string;
  strTeamBadge?: string;
}

 // const standardQuery = useDebounce(queryKey, 500)


const CardList = (props: CardPageProps) => {
  const { sportDetail }: any = props;
  console.log(sportDetail)
  return (
    <div>
      {sportDetail &&
        sportDetail.map((value: CardPageProps, i: number) => {
          return <CardPage key={i} {...value} />;
        })}
    </div>
  );
};

const mapStateToProps = (store: IAppState) => {
  return {
    teamsID: store.teamsState.teamsDetail,
    teams: store.teamsState.teams,
    sportDetail: store.sportsState.sportDetail,

  };
};

export default connect(mapStateToProps)(CardList);
