// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Sport Typing
import { ISport, ISportState } from '../reducers/SportReducers';

// Create Action Constants
export enum SportActionTypes {
  GET_ALL_SPORTS = 'GET_ALL_SPORTS',
  GET_SPORT_DETAIL = 'GET_SPORT_DETAIL'
}

// Interface for Get All Action Type
export interface ISportGetAllAction {
  type: string;
  sports: ISport[];
  sportDetail: ISport[]
}
/* 
Combine the action types with a union (we assume there are more)
example: export type SportActions = IGetAllAction | IGetOneAction ... 
*/
export type SportActions = ISportGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */

  export const getAllSports: ActionCreator<
    ThunkAction<Promise<any>, ISportState, null, ISportGetAllAction>
  > = () => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/2/searchteams.php?t=`);
        dispatch({
          sports: response.data.teams,
          type: SportActionTypes.GET_ALL_SPORTS,
        });
      } catch (err) {
        console.error(err);
      }
    };
  };

  export const getSportDetail: ActionCreator<
  ThunkAction<Promise<any>, ISportState, null, ISportGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/2/lookupleague.php?id=4335`);
      dispatch({
        sportDetail: response.data.leagues,
        type: SportActionTypes.GET_SPORT_DETAIL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};