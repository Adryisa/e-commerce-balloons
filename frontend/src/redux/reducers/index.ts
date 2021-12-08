import { combineReducers } from "redux";
import balloonsReducer from "./balloonsReducer";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
    balloons: balloonsReducer,
    cart: cartReducer
})

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;