import { AnyAction } from "redux";
import balloonsAndCartActionTypes from "../actions/actionTypes";


function userReducer(state: any = {}, action: AnyAction) {

    console.log(action)
    let newState; 

    switch (action.type) {
        case balloonsAndCartActionTypes.LOAD_USER:
        newState = action.payload
        break; 
        default:
        newState = state;
        break;
    }
    return newState;
}

export default userReducer;