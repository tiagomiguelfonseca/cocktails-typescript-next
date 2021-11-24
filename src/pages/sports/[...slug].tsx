import { useRouter } from "next/router";
import Layout from "../../containers/Layout";
import { createSelector } from "@reduxjs/toolkit";
import { useMemo } from "react";
import {
  useGetLeagueInfoQuery,
  useGetLivescoresQuery,
} from "../../features/livescores/api";
import Link from 'next/link'

const Lookups = () => {
  const router = useRouter();
  const slug: any = router.query.slug || [];
  const { data, isError, isLoading, error } = useGetLivescoresQuery(slug);
console.log(router)
  return (
    <Layout>
      <h1>Livescores {slug}</h1>
      {isError ? (
        <>Oh no, there was an error {console.log(error)}</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          {slug == "all_leagues" ? (
            data.leagues.map(
              ({ idLeague, strLeague, strBadge, strSport }: any, index) => {
                return (
                  <li key={idLeague}>
                    <p>{idLeague}</p>
                    <p>{strSport}</p>
                    {strLeague}
                  </li>
                );
              }
            )
          ) : slug == "all_sports" ? (
            data.sports.map(({ strSport }: any, i) => {
              return <Link href={`${router.asPath}/${strSport}`}><li key={i}><a>{strSport}</a></li></Link>;
            })
          ) : slug == "all_countries" ? (
            data.countries.map(({ name_en }: any, i) => {
              return <li key={i}>{name_en}</li>;
            })
          ) : (
            <h1>An Error ocurred slug is {slug}</h1>
          )}
        </div>
      ) : null}
    </Layout>
  );
};

export default Lookups;
