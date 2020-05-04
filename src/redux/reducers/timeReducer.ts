import { Action, _Time } from "./rootReducers";
import {
  SET_TIME_TIME,
  SET_TIME_LIMIT_ADD,
  SET_TIME_LIMIT_REMOVE,
} from "../../constants/const";

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
    case SET_TIME_LIMIT_ADD:
      return {
        ...state,
        limitScore: state.limitScore + 1,
      };

    case SET_TIME_LIMIT_REMOVE:
      return {
        ...state,
        limitScore: state.limitScore - 1,
      };

    default:
      return state;
  }
};

export default timeReducer;
