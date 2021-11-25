import { useState } from "react";
import { useSearchParams, useNavigate, createSearchParams, Link} from 'react-router-dom';

import { FlexContainer, Main, Aside, Text, Image } from "./styles";
import { ISport } from "../store/reducers/SportReducers";

type CardPageProps = ISport | any;

interface AppendSearchParams {
    obj: any;
    idTeam: any
    value: number;
  }

const CardPage = (props?: CardPageProps) => {

      
      const [queryKey, setQueryKey] = useState("");
      const [searchParams] = useSearchParams();
    
      function appendSearchParams(obj: any) {
          const sp = createSearchParams(searchParams);
          
          Object.entries(obj).forEach(([key, value]:any) => {
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
      

  const { idLeague, strSport, strFanart1 }:any = props;
  return (
    <FlexContainer>
      <Aside>
        <Text Ttitle='Ttitle'>Name: </Text>
        <Text title='title'></Text>
        <Link to={`/team?${appendSearchParams({"": idLeague})}`}>{strSport}</Link>
        <Link to={`/team/${idLeague}`}>{strSport}</Link>
        <Text Ttitle='Ttitle'>Badge: </Text>
        <Image src={strFanart1} alt='' />
      </Aside>
      <Main></Main>
    </FlexContainer>
  );
};

export default CardPage