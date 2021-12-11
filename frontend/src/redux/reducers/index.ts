import { combineReducers } from "redux";
import balloonsReducer from "./balloonsReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    balloons: balloonsReducer,
    cart: cartReducer,
    user: userReducer,
})

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;