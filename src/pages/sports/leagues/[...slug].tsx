import { useRouter } from "next/router";
import Layout from "../../../containers/Layout";
import { createSelector } from "@reduxjs/toolkit";
import { useMemo } from "react";
import {
  useGetLeagueInfoQuery,
  useGetLivescoresQuery,
} from "../../../features/livescores/api";

const Sport = () => {
  const router = useRouter();
  const slug: any = router.query.slug || [];
  const { data, isError, isLoading, error } =
    useGetLeagueInfoQuery(slug);
  return (
    <div>
      {isError ? (
        <>Oh no, there was an error {console.log(error)}</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        data &&
        data.leagues
          .map(({strLeague, strLeagueAlternate, strCountry, strBadge}) => {
            return <li> <p>{strLeague}</p> <p>{strLeagueAlternate}</p><p>{strCountry}</p><img src={strBadge} alt="" /></li>;
          })
      )}
    </div>
  );
};
export default Sport;
