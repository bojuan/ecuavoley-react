import { SET_NAME_TEAM_TWO } from "../../constants/const"


export const setNameTeamTwo:Function = (name: string) => {
    return {
        type: SET_NAME_TEAM_TWO,
        payload: name
    }
}