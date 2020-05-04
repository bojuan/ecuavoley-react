import { SET_TIME_TIME, SET_TIME_LIMIT_ADD, SET_TIME_LIMIT_REMOVE } from "../../constants/const"


export const setTimeTime:Function = (time: number) => {
    return {
        type: SET_TIME_TIME,
        payload: time
    }
}

export const setTimeLimitAdd:Function = () => {
    return {
        type: SET_TIME_LIMIT_ADD,
        payload: null
    }
}

export const setTimeLimitRemove:Function = () => {
    return {
        type: SET_TIME_LIMIT_REMOVE,
        payload: null
    }
}