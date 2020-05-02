import { SET_NAME_TEAM_ONE } from "../../constants/const"


export const setNameTeamOne:Function = (name: string) => {
    return {
        type: SET_NAME_TEAM_ONE,
        payload: name
    }
}