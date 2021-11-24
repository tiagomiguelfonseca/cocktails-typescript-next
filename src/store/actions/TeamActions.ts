// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Sport Typing
import { ITeam, ITeamState } from '../reducers/TeamReducers';

// Create Action Constants
export enum TeamActionTypes {
  GET_ALL_TEAMS = 'GET_ALL_TEAMS',
  GET_TEAM_DETAIL = 'GET_TEAM_DETAIL'
}

// Interface for Get All Action Type
export interface ITeamGetAllAction {
  type: string;
  teams: ITeam []
}

/* 
Combine the action types with a union (we assume there are more)
example: export type SportActions = IGetAllAction | IGetOneAction ... 
*/
export type TeamActions = ITeamGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */

  export const getAllClubs: ActionCreator<
  ThunkAction<Promise<any>, ITeamState, null, ITeamGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/2/searchteams.php?t=`);
      dispatch({
        teams: response.data.teams,
        type: TeamActionTypes.GET_ALL_TEAMS,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getTeamDetail: ActionCreator<
ThunkAction<Promise<any>, ITeamState, null, ITeamGetAllAction>
> = () => {
return async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/2/lookupleague.php?id=4335`);
    dispatch({
      teamsID: response.data.teams,
      type: TeamActionTypes.GET_TEAM_DETAIL,
    });
  } catch (err) {
    console.error(err);
  }
};
};