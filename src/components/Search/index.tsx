import { useRouter } from 'next/router';
import {DefaultContainer} from "src/containers/Layout/styles" 

interface IProps {
  searchID?: any;
  findByTitle?: any;
  searchTitle?: string;
  searchQuery?: any
  setSearchQuery?: any
}
export default function Search({ searchQuery, setSearchQuery }:IProps) {
  const router = useRouter()

  const onSubmit = (e) => {
    router.push(`?s=${searchQuery}`);
      e.preventDefault();
  };

  return (
    <DefaultContainer >
      <form
            action=""
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
       >
           <input
                value={searchQuery}
                onInput={(e: any) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search for sports or events"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    </DefaultContainer>
  );
}
