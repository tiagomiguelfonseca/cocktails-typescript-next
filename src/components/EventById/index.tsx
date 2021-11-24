import {
  useGetEventInfoQuery
} from "src/features/livescores/api";

// I try this too, but the API only return 25 events and doesn't show sport on all of them even if exists

export default function EventById({ id }: any) {
  const { data, isError, isLoading, error } = useGetEventInfoQuery("");

  const filterEvent = data?.event?.filter((v) => v.strSport === id);
  return (
    <div>
      <h1>Events of - {id}</h1>
      {isError ? (
        <>Oh no, there was an error {console.log(error)}</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (filterEvent === undefined || filterEvent.length === 0) ? (
        <h1>Not events found realted with the {id}</h1> && 
        filterEvent.map((v) => {
          return <li>{v.strEvent}</li>;
        })
      ) : null}
    </div>
  );
}
