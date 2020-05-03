import { Action, _Time } from "./rootReducers";
import { SET_TIME_TIME } from "../../constants/const";

const defaultTime: _Time = {
  time: 1,
  limitScore: 12,
};

const timeReducer = (state = defaultTime, action: Action) => {
  switch (action.type) {
    case SET_TIME_TIME:
      return {
        ...state,
        time: action.payload,
      };

    default:
      return state;
  }
};

export default timeReducer;
