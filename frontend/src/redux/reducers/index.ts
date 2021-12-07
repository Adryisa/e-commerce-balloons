import { combineReducers } from "redux";
import balloonsReducer from "./balloonsReducer";


const rootReducer = combineReducers({
    balloons: balloonsReducer
})

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;