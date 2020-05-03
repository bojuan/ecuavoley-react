import { Action, Team } from "./rootReducers";
import {
  SET_NAME_TEAM_ONE,
  ADD_POINT_TEAM_ONE_FIRST,
  REMOVE_POINT_TEAM_ONE_FIRST,
  ADD_POINT_TEAM_ONE_SECOND,
  REMOVE_POINT_TEAM_ONE_SECOND,
  ADD_POINT_TEAM_ONE_THIRD,
  REMOVE_POINT_TEAM_ONE_THIRD,
} from "../../constants/const";

const defaultTeamOne: Team = {
  name: "Equipo 1",
  color: "#eb144c",
  scoreFirstTime: 0,
  scoreSecondTime: 0,
  scoreFinalTime: 0,
};

const teamOneReducer = (state: Team = defaultTeamOne, action: Action) => {
  switch (action.type) {
    case SET_NAME_TEAM_ONE:
      return {
        ...state,
        name: action.payload,
      };
    case ADD_POINT_TEAM_ONE_FIRST:
      return {
        ...state,
        scoreFirstTime: state.scoreFirstTime + 1,
      };
    case REMOVE_POINT_TEAM_ONE_FIRST:
      return {
        ...state,
        scoreFirstTime: state.scoreFirstTime - 1,
      };

    case ADD_POINT_TEAM_ONE_SECOND:
      return {
        ...state,
        scoreSecondTime: state.scoreSecondTime + 1,
      };
    case REMOVE_POINT_TEAM_ONE_SECOND:
      return {
        ...state,
        scoreSecondTime: state.scoreSecondTime - 1,
      };

    case ADD_POINT_TEAM_ONE_THIRD:
      return {
        ...state,
        scoreFinalTime: state.scoreFinalTime + 1,
      };
    case REMOVE_POINT_TEAM_ONE_THIRD:
      return {
        ...state,
        scoreFinalTime: state.scoreFinalTime - 1,
      };
    default:
      return state;
  }
};

export default teamOneReducer;
