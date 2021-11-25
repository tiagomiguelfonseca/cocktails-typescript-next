// Import Reducer type
import { Reducer } from 'redux';
import {
    SportActions,
    SportActionTypes,
} from '../actions/SportActions';

// Define the Character type
export interface ISport {
    strSportThumb: string;
    strSport: string;
    idSport: number;
    strSportIconGreen: string;
}

// Define the Character State
export interface ISportState {
    readonly sports: ISport[];
    readonly sportDetail: ISport[];
    // readonly term: string
}

// Define the initial state
const initialSportState: ISportState = {
    sports: [],
    sportDetail: []
    // term: ""
};

export const sportReducer: Reducer<ISportState, SportActions> = (
    state = initialSportState,
    action
) => {
    switch (action.type) {
        case SportActionTypes.GET_ALL_SPORTS: {
            return {
                ...state,
                sports: action.sports,
            };
        }
        case SportActionTypes.GET_SPORT_DETAIL: {
            return {
                ...state,
                sportDetail: action.sportDetail,
            };
        }
        
        default:
            return state;
    }
};