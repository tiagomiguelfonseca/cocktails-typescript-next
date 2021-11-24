import { useRouter } from "next/router";
import React, { useState } from "react";
import Search from "src/components/Search";
import { useGetLivescoresQuery } from "src/features/livescores/api";
import MediaCard from "../Card";
import { CustomDefaultContainer } from "./styles";

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName =post.strLeague?.toLowerCase() || post.strSport?.toLowerCase();
    return postName.includes(query);
  });
};

export default function Home() {
  const router = useRouter();
  const { s }: any = router.query;
  const query = s;
  const [searchQuery, setSearchQuery] = useState(query || "");

  const { data, isError, isLoading} =
    useGetLivescoresQuery("all_leagues");

  const {
    data: edata,
    isError: eisError,
    isLoading: eisLoading,
  } = useGetLivescoresQuery("all_sports");

  const filteredPosts = filterPosts(
    data?.leagues?.concat(edata?.sports),
    searchQuery
  );

  return (
    <div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CustomDefaultContainer>
        {searchQuery !== "" &&
          (eisError || isError || eisLoading || isLoading) === false &&
          filteredPosts?.map((v) => (
            <MediaCard
              key={v.idLeague}
              title={v.strLeague}
              text1={v.strCountry}
              text2={v.strSport}
              image={v.strBadge}
              description={v.strDescriptionEN}
            />
          ))}
      </CustomDefaultContainer>
    </div>
  );
}
