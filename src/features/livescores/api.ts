import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Livescores, Leagues, Events } from './types'

//This Is my final aproach (RTK) from redux toolkit recomendation

  export const livescoresApi = createApi({
    reducerPath: 'livescoresApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thesportsdb.com/api/v1/json/2' }),
    endpoints: (builder) => ({
      getLivescores: builder.query<Livescores, string>({
        query: (typeofSearch) => `${typeofSearch}.php`,
      }),
      getLeagueInfo: builder.query<Leagues, string>({
        query: (id) => `lookupleague.php?id=${id}`,
      }),
      getEventInfo: builder.query<Events, string>({
        query: (id) => `searchevents.php?e=${id}`,
      })
    }),
  })
  export const { useGetLivescoresQuery, useGetLeagueInfoQuery, useGetEventInfoQuery } = livescoresApi