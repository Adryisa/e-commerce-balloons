import { AnyAction } from "redux";
import balloonsAndCartActionTypes from "../actions/actionTypes";


function userReducer(state = {}, action: AnyAction) {

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