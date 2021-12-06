import { AnyAction } from "redux";
import Balloon from "../../interfaces/balloonsInterface";
import actionTypes from '../actions/actionTypes'



function balloonsReducer(state = [], action: AnyAction) {
    let newState; 

    switch(action.type) {
        case actionTypes.LOAD_BALLOONS:
        newState = action.balloons
        break;

        default: 
        newState = state
        break;
    }
    return newState;
}


export default balloonsReducer;
