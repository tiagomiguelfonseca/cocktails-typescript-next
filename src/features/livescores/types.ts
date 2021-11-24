type Teams = {
  Match: {
    League: string;
  }[];
};

export type Livescores = {
  id: number;
  name: string;
  teams: Teams;
  League: string;
  map: any
  sports: Sports;
  strSport: any
  leagues: any
  countries: any
  strSportIconGreen: any;
};

export type Leagues = {
  id: number;
  name: string;
  teams: Teams;
  League: string;
  map: string
  sports: Sports;
  strSport: string
  leagues: {
    strLeague:string;
    idLeague: number;
    strSport: string;
    strBadge: string;
    strDescriptionEN: string;
    strCountry: string;
  }[];
  countries: string
  strSportIconGreen: string;
};

export type Events = {
  event: {
    idEvent: number;
    strEvent: string;
    teams: Teams;
    League: string;
    map: string
    sports: Sports;
    strSport: string
    strLeague: string
    strHomeTeam: string
    strAwayTeam: string;
    strVenue: string
    strFilename: string;
    dateEvent: string;
  }[];
};

type Sports = {
  idSport:string;
  strSport: string;
  strSportIconGreen: string;
}[]
