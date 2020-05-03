import { Action, Team } from "./rootReducers";
import {
  SET_NAME_TEAM_TWO,
  ADD_POINT_TEAM_TWO_FIRST,
  REMOVE_POINT_TEAM_TWO_FIRST,
  ADD_POINT_TEAM_TWO_SECOND,
  REMOVE_POINT_TEAM_TWO_SECOND,
  ADD_POINT_TEAM_TWO_THIRD,
  REMOVE_POINT_TEAM_TWO_THIRD,
} from "../../constants/const";

const defaultTeamTwo: Team = {
  name: "Equipo 2",
  color: "#0062B1",
  scoreFirstTime: 0,
  scoreSecondTime: 0,
  scoreFinalTime: 0,
};

const teamTwoReducer = (state = defaultTeamTwo, action: Action) => {
  switch (action.type) {
    case SET_NAME_TEAM_TWO:
      return {
        ...state,
        name: action.payload,
      };
    case ADD_POINT_TEAM_TWO_FIRST:
      //console.log("state", state);
      return {
        ...state,
        scoreFirstTime: state.scoreFirstTime + 1,
      };
    case REMOVE_POINT_TEAM_TWO_FIRST:
      return {
        ...state,
        scoreFirstTime: state.scoreFirstTime - 1,
      };

    case ADD_POINT_TEAM_TWO_SECOND:
      //console.log("state", state);
      return {
        ...state,
        scoreSecondTime: state.scoreSecondTime + 1,
      };
    case REMOVE_POINT_TEAM_TWO_SECOND:
      return {
        ...state,
        scoreSecondTime: state.scoreSecondTime - 1,
      };

    case ADD_POINT_TEAM_TWO_THIRD:
      //console.log("state", state);
      return {
        ...state,
        scoreFinalTime: state.scoreFinalTime + 1,
      };
    case REMOVE_POINT_TEAM_TWO_THIRD:
      return {
        ...state,
        scoreFinalTime: state.scoreFinalTime - 1,
      };

    default:
      return state;
  }
};

export default teamTwoReducer;
