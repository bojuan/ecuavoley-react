import { Action, Team } from "./rootReducers";
import {
  SET_NAME_TEAM_TWO,
  ADD_POINT_TEAM_TWO_FIRST,
  REMOVE_POINT_TEAM_TWO_FIRST,
  ADD_POINT_TEAM_TWO_SECOND,
  REMOVE_POINT_TEAM_TWO_SECOND,
  ADD_POINT_TEAM_TWO_THIRD,
  REMOVE_POINT_TEAM_TWO_THIRD,
  SET_LIMIT_FIRST_TEAM_TWO,
  SET_LIMIT_SECOND_TEAM_TWO,
  SET_LIMIT_FINAL_TEAM_TWO,
} from "../../constants/const";

const defaultTeamTwo: Team = {
  name: "Equipo 2",
  color: "#0062B1",
  scoreFirstTime: {
    value: 0,
    limitValue: 12,
  },
  scoreSecondTime: {
    value: 0,
    limitValue: 12,
  },
  scoreFinalTime: {
    value: 0,
    limitValue: 12,
  },
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
        scoreFirstTime: {
          ...state.scoreFirstTime,
          value: state.scoreFirstTime.value + 1,
        },
      };
    case REMOVE_POINT_TEAM_TWO_FIRST:
      return {
        ...state,
        scoreFirstTime: {
          ...state.scoreFirstTime,
          value: state.scoreFirstTime.value - 1,
        },
      };

    case ADD_POINT_TEAM_TWO_SECOND:
      //console.log("state", state);
      return {
        ...state,
        scoreSecondTime: {
          ...state.scoreSecondTime,
          value: state.scoreSecondTime.value + 1,
        },
      };
    case REMOVE_POINT_TEAM_TWO_SECOND:
      return {
        ...state,
        scoreSecondTime: {
          ...state.scoreSecondTime,
          value: state.scoreSecondTime.value - 1,
        },
      };

    case ADD_POINT_TEAM_TWO_THIRD:
      //console.log("state", state);
      return {
        ...state,
        scoreFinalTime: {
          ...state.scoreFinalTime,
          value: state.scoreFinalTime.value + 1,
        },
      };
    case REMOVE_POINT_TEAM_TWO_THIRD:
      return {
        ...state,
        scoreFinalTime: {
          ...state.scoreFinalTime,
          value: state.scoreFinalTime.value - 1,
        },
      };

      case SET_LIMIT_FIRST_TEAM_TWO:
        return {
          ...state,
          scoreFirstTime: {
            ...state.scoreFirstTime,
            limitValue: action.payload,
          },
        };

      case SET_LIMIT_SECOND_TEAM_TWO:
      return {
        ...state,
        scoreSecondTime: {
          ...state.scoreSecondTime,
          limitValue: action.payload,
        },
      };

      case SET_LIMIT_FINAL_TEAM_TWO:
      return {
        ...state,
        scoreFinalTime: {
          ...state.scoreFinalTime,
          limitValue: action.payload,
        },
      };

    default:
      return state;
  }
};

export default teamTwoReducer;
