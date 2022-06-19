import { combineReducers } from "redux";
import { users } from "./users";

export const rootReducer = combineReducers({ users });
export type RootReducer  = ReturnType<typeof rootReducer>
