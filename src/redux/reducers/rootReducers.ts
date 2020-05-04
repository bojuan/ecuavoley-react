import { combineReducers } from "redux";
import teamOneReducer from "./teamOneReducer";
import teamTwoReducer from "./teamTwoReducer";
import timeReducer from "./timeReducer";

interface Score {
  value: number;
  limitValue: number;
}

export interface Action {
    type: string;
    payload: any;
  }

export interface Team {
    name: string;
    color: string;
    scoreFirstTime: Score;
    scoreSecondTime: Score;
    scoreFinalTime: Score;
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
