import { combineReducers } from "redux";
import teamOneReducer from "./teamOneReducer";
import teamTwoReducer from "./teamTwoReducer";
import timeReducer from "./timeReducer";

export interface Action {
    type: string;
    payload: any;
  }

export interface Team {
    name: string;
    color: string;
    scoreFirstTime: number;
    scoreSecondTime: number;
    scoreFinalTime: number;
}

export interface _Time {
    time: number;
    limitScore: number;
}

export interface Reducers {
    teamOneReducer: Team;
    teamTwoReducer: Team;
    timeReducer: _Time;
}

const rootReducers = combineReducers({
  teamOneReducer,
  teamTwoReducer,
  timeReducer
});

export default rootReducers;
