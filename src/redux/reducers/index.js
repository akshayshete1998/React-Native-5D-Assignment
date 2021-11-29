import { combineReducers } from "redux";
import { characterReducer } from "./charactersReducer";

export const rootReducer = combineReducers({
    allCharacters: characterReducer
})