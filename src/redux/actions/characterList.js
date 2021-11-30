import { ActionTypes } from "../constants/constants-type";

export const setCharacters = (characters) => {
    return {
        type: ActionTypes.SET_CHARACTERS,
        payload: characters
    }
}
export const setFavorites = (characters) => {
    return {
        type: ActionTypes.SET_FAVORIES_CHARACTERS,
        payload: characters
    }
}