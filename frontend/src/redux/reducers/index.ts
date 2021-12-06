import { combineReducers } from "redux";
import ballonsReducer from "./balloonsReducer";


const rootReducer = combineReducers({
    ballonsReducer
})

export default rootReducer;
export type rootReducer = ReturnType<typeof rootReducer>;