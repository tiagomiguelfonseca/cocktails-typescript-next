import { useRouter } from "next/router";
import LeagueById from "src/components/LeagueById";
import { useGetLivescoresQuery } from "src/features/livescores/api";
import { DefaultContainer } from "src/containers/Layout/styles";
import Layout from "src/containers/Layout";
import AllSportsBar from "src/components/AllSportsBar";
import EventById from "src/components/EventById";

//Component that grabs the name id of the sport, matches with the url slug,
//to inject to a new seach to render all id events and Leagues sending props to LeagueById component

const Sport = () => {
  const router = useRouter();
  const slug: string | string[] = router.query.slug || [];
  const {
    data: posts,
    isError,
    isLoading,
    error,
  } = useGetLivescoresQuery("all_leagues");

  return (
    <Layout>
      <AllSportsBar />
      <EventById key={slug} id={slug} />
      <h1>Leagues of {slug}</h1>
      <DefaultContainer>
        {isError ? (
          <>Oh no, there was an error {console.log(error)}</>
        ) : isLoading ? (
          <>Loading...</>
        ) : (
          posts &&
          posts?.leagues
            ?.filter((v) => v.strSport.toLowerCase() === slug[0])
            ?.map((post) => {
              return (
                <>
                  <LeagueById key={post.idLeague} id={post.idLeague} />
                </>
              );
            })
        )}
      </DefaultContainer>
    </Layout>
  );
};

export default Sport;
