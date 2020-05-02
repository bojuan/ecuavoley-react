import { Action, Team } from './rootReducers';
import { SET_NAME_TEAM_TWO } from "../../constants/const";

const defaultTeamTwo: Team = {
  name: "Equipo 2",
  color: "black",
  scoreFirstTime: 0,
  scoreSecondTime: 0
};

const teamTwoReducer = (state = defaultTeamTwo, action: Action) => {
  switch (action.type) {
    case SET_NAME_TEAM_TWO:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default teamTwoReducer;
