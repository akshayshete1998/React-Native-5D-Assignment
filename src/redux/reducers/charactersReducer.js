import { ActionTypes } from "../constants/constants-type";

const initialState = {
    characters: []
}

export const characterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CHARACTERS:
            return { ...state, characters: payload }
        default:
            return state;
    }
}