/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from "react";
import { useGetLivescoresQuery } from "../../features/livescores/api";
import { Container, Icon } from "./styles";

export default function AllSportsBar() {
  const { data, isError, isLoading, error } =
    useGetLivescoresQuery("all_sports");

  return (
    <Container>
      {isError ? (
        <>Oh no, there was an error {console.log(error)}</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.sports.map((v, i) => {
            return (
              <li key={i}>
                <Link href={`/all_sports/${v.strSport.toLowerCase()}`}><a><Icon src={v.strSportIconGreen} alt='' /></a></Link>
              </li>
            );
          })}
        </>
      ) : null}
    </Container>
  );
}
