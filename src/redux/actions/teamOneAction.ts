import {
  SET_NAME_TEAM_ONE,
  ADD_POINT_TEAM_ONE_FIRST,
  REMOVE_POINT_TEAM_ONE_FIRST,
  ADD_POINT_TEAM_ONE_SECOND,
  REMOVE_POINT_TEAM_ONE_SECOND,
  REMOVE_POINT_TEAM_ONE_THIRD,
  ADD_POINT_TEAM_ONE_THIRD,
  SET_LIMIT_FIRST_TEAM_ONE,
  SET_LIMIT_SECOND_TEAM_ONE,
  SET_LIMIT_FINAL_TEAM_ONE
} from "../../constants/const";

export const setNameTeamOne: Function = (name: string) => {
  return {
    type: SET_NAME_TEAM_ONE,
    payload: name,
  };
};

export const setLimitFirstTeamOne: Function = (limit: number) => {
  return {
    type: SET_LIMIT_FIRST_TEAM_ONE,
    payload: limit,
  };
};

export const setLimitSecondTeamOne: Function = (limit: number) => {
  return {
    type: SET_LIMIT_SECOND_TEAM_ONE,
    payload: limit,
  };
};

export const setLimitFinalTeamOne: Function = (limit: number) => {
  return {
    type: SET_LIMIT_FINAL_TEAM_ONE,
    payload: limit,
  };
};

export const addPointTeamOneFirst: Function = () => {
  return {
    type: ADD_POINT_TEAM_ONE_FIRST,
    payload: 1,
  };
};

export const removePointTeamOneFirst: Function = () => {
  return {
    type: REMOVE_POINT_TEAM_ONE_FIRST,
    payload: 1,
  };
};

export const addPointTeamOneSecond: Function = () => {
  return {
    type: ADD_POINT_TEAM_ONE_SECOND,
    payload: 1,
  };
};

export const removePointTeamOneSecond: Function = () => {
  return {
    type: REMOVE_POINT_TEAM_ONE_SECOND,
    payload: 1,
  };
};

export const addPointTeamOneThird: Function = () => {
  return {
    type: ADD_POINT_TEAM_ONE_THIRD,
    payload: 1,
  };
};

export const removePointTeamOneThird: Function = () => {
  return {
    type: REMOVE_POINT_TEAM_ONE_THIRD,
    payload: 1,
  };
};
