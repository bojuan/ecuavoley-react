import { Action, Team } from "./rootReducers";
import {
  SET_NAME_TEAM_ONE,
  ADD_POINT_TEAM_ONE_FIRST,
  REMOVE_POINT_TEAM_ONE_FIRST,
  ADD_POINT_TEAM_ONE_SECOND,
  REMOVE_POINT_TEAM_ONE_SECOND,
  ADD_POINT_TEAM_ONE_THIRD,
  REMOVE_POINT_TEAM_ONE_THIRD,
  SET_LIMIT_FIRST_TEAM_ONE,
  SET_LIMIT_SECOND_TEAM_ONE,
  SET_LIMIT_FINAL_TEAM_ONE,
} from "../../constants/const";

const defaultTeamOne: Team = {
  name: "Equipo 1",
  color: "#eb144c",
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
        scoreFirstTime: {
          ...state.scoreFirstTime,
          value: state.scoreFirstTime.value + 1,
        },
      };
    case REMOVE_POINT_TEAM_ONE_FIRST:
      return {
        ...state,
        scoreFirstTime: {
          ...state.scoreFirstTime,
          value: state.scoreFirstTime.value - 1,
        },
      };

    case ADD_POINT_TEAM_ONE_SECOND:
      return {
        ...state,
        scoreSecondTime: {
          ...state.scoreSecondTime,
          value: state.scoreSecondTime.value + 1,
        },
      };
    case REMOVE_POINT_TEAM_ONE_SECOND:
      return {
        ...state,
        scoreSecondTime: {
          ...state.scoreSecondTime,
          value: state.scoreSecondTime.value - 1,
        },
      };

    case ADD_POINT_TEAM_ONE_THIRD:
      return {
        ...state,
        scoreFinalTime: {
          ...state.scoreFinalTime,
          value: state.scoreFinalTime.value + 1,
        },
      };
    case REMOVE_POINT_TEAM_ONE_THIRD:
      return {
        ...state,
        scoreFinalTime: {
          ...state.scoreFinalTime,
          value: state.scoreFinalTime.value - 1,
        },
      };

    case SET_LIMIT_FIRST_TEAM_ONE:
      return {
        ...state,
        scoreFirstTime: {
          ...state.scoreFirstTime,
          limitValue: action.payload,
        },
      };

      case SET_LIMIT_SECOND_TEAM_ONE:
      return {
        ...state,
        scoreSecondTime: {
          ...state.scoreSecondTime,
          limitValue: action.payload,
        },
      };

      case SET_LIMIT_FINAL_TEAM_ONE:
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

export default teamOneReducer;
