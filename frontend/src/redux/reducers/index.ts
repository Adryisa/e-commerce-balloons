import { combineReducers } from "redux";
import balloonsReducer from "./balloonsReducer";


const rootReducer = combineReducers({
    balloonsReducer
})

export default rootReducer;
export type rootReducer = ReturnType<typeof rootReducer>;