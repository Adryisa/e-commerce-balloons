import { AnyAction } from "redux";
import balloonsAndCartActionTypes from '../actions/actionTypes'



function balloonsReducer(state = [], action: AnyAction) {
    let newState; 

    switch(action.type) {
        case balloonsAndCartActionTypes.LOAD_BALLOONS:
        newState = action.balloons
        break;
        default: 
        newState = state
        break;
    }
    return newState;
}


export default balloonsReducer;
