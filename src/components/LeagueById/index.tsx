import { useGetLeagueInfoQuery } from "src/features/livescores/api";
import MediaCard from "../Card";

export default function LeagueById({ id }) {
    const { data } = useGetLeagueInfoQuery(id);
    const reduce = data?.leagues?.slice(0, 8);
  
    return (
      <div>
        {reduce?.map(
          ({
            strSport,
            strLeague,
            strBadge,
            idLeague,
            strDescriptionEN,
            strCountry,
          }) => {
            return (
              <MediaCard
                key={idLeague}
                title={strLeague}
                text1={strCountry}
                text2={strSport}
                image={strBadge}
                description={strDescriptionEN}
              />
            );
          }
        )}
      </div>
    );
  }