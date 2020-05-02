import { SET_TIME_TIME } from "../../constants/const"


export const setTimeTime:Function = (time: number) => {
    return {
        type: SET_TIME_TIME,
        payload: time
    }
}