import {
  SET_NAME_TEAM_TWO,
  REMOVE_POINT_TEAM_TWO_FIRST,
  ADD_POINT_TEAM_TWO_FIRST,
  ADD_POINT_TEAM_TWO_SECOND,
  REMOVE_POINT_TEAM_TWO_SECOND,
  REMOVE_POINT_TEAM_TWO_THIRD,
  ADD_POINT_TEAM_TWO_THIRD,
  SET_LIMIT_FIRST_TEAM_TWO,
  SET_LIMIT_SECOND_TEAM_TWO,
  SET_LIMIT_FINAL_TEAM_TWO
} from "../../constants/const";

export const setNameTeamTwo: Function = (name: string) => {
  return {
    type: SET_NAME_TEAM_TWO,
    payload: name,
  };
};

export const setLimitFirstTeamTwo: Function = (limit: number) => {
  return {
    type: SET_LIMIT_FIRST_TEAM_TWO,
    payload: limit,
  };
};

export const setLimitSecondTeamTwo: Function = (limit: number) => {
  return {
    type: SET_LIMIT_SECOND_TEAM_TWO,
    payload: limit,
  };
};

export const setLimitFinalTeamTwo: Function = (limit: number) => {
  return {
    type: SET_LIMIT_FINAL_TEAM_TWO,
    payload: limit,
  };
};

export const addPointTeamTwoFirst: Function = () => {
  return {
    type: ADD_POINT_TEAM_TWO_FIRST,
    payload: 1,
  };
};

export const removePointTeamTwoFirst: Function = () => {
  return {
    type: REMOVE_POINT_TEAM_TWO_FIRST,
    payload: 1,
  };
};

export const addPointTeamTwoSecond: Function = () => {
    return {
      type: ADD_POINT_TEAM_TWO_SECOND,
      payload: 1,
    };
  };
  
  export const removePointTeamTwoSecond: Function = () => {
    return {
      type: REMOVE_POINT_TEAM_TWO_SECOND,
      payload: 1,
    };
  };

  export const addPointTeamTwoThird: Function = () => {
    return {
      type: ADD_POINT_TEAM_TWO_THIRD,
      payload: 1,
    };
  };
  
  export const removePointTeamTwoThird: Function = () => {
    return {
      type: REMOVE_POINT_TEAM_TWO_THIRD,
      payload: 1,
    };
  };
