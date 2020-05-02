import { Action, Team } from './rootReducers';
import { SET_NAME_TEAM_ONE } from "../../constants/const";

const defaultTeamOne: Team = {
  name: "Equipo 1",
  color: "white",
  scoreFirstTime: 0,
  scoreSecondTime: 0
};

const teamOneReducer = (state = defaultTeamOne, action: Action) => {
  switch (action.type) {
    case SET_NAME_TEAM_ONE:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default teamOneReducer;
