import { AnyAction } from "redux";
import balloonsAndCartActionTypes from "../actions/actionTypes";


function userReducer(state: any = {}, action: AnyAction) {

    let newState; 

    switch (action.type) {
        case balloonsAndCartActionTypes.LOAD_USER:
        newState = action.payload
        break; 
        case balloonsAndCartActionTypes.ADD_USER:
            console.log(action.payload)
        newState = action.payload.newUser
        break;
        default:
        newState = state;
        break;
    }
    return newState;
}

export default userReducer;