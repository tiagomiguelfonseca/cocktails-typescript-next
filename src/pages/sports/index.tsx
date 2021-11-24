import { useReducer } from "react";
import { useRouter } from "next/router";
import { useGetLivescoresQuery } from "../../features/livescores/api";
import Lookups from "./[...slug]";
import AllSportsBar from "../../components/AllSportsBar/index";
import NavBar from "../../components/NavBar/index";
import Layout from "../../containers/Layout/index";
import Hero from '../../components/Hero/index';
import Search from "src/components/Search"

interface RouteProps {
  slug: any;
  valor: string;
}

interface SlugProps {}

const List = () => {
  const router = useRouter();
  const slug: any = router.query.slug || [];
  const { data, isError, isLoading } = useGetLivescoresQuery(slug);

  console.log(data);
  return (
    <Layout>
      <Hero />
      <Search/>
    </Layout>
  );
};

export default List;
