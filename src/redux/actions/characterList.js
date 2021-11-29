import { ActionTypes } from "../constants/constants-type";

export const setCharacters = (characters) => {
    return {
        type: ActionTypes.SET_CHARACTERS,
        payload: characters
    }
}