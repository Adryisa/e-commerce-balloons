import { AnyAction } from "redux";
import Balloon from "../../interfaces/balloonsInterface";
import actionTypes from '../actions/actionTypes'



function ballonsReducer(balloons = [], action: AnyAction) {
    let newState; 

    switch(action.type) {
        case actionTypes.LOAD_BALLOONS:
        newState = [...action.balloons]
    }
    return newState;
}


export default ballonsReducer;
