// Import Reducer type
import { Reducer } from 'redux';
import { TeamActionTypes, TeamActions } from '../actions/TeamActions';

// Define the Character type
export interface ITeam {
    idTeam: number;
    strTeam: string;
}

// Define the Character State
export interface ITeamState {
    readonly teams: ITeam[];
    readonly teamsDetail: ITeam[];
}

// Define the initial state
const initialTeamState: ITeamState = {
    teams: [],
    teamsDetail: []
};

export const teamReducer: Reducer<ITeamState, TeamActions> = (
    state = initialTeamState,
    action
) => {
    switch (action.type) {
        case TeamActionTypes.GET_ALL_TEAMS: {
            return {
                ...state,
                teams: action.teams,
            };
        }
        case TeamActionTypes.GET_TEAM_DETAIL: {
            return {
                ...state,
                teamsID: action.teams,
            };
        }
        default:
            return state;
    }
};