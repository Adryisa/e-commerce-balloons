import balloonsAndCartActionTypes from "../actions/actionTypes";
import { AnyAction } from "redux";

const initialCart = { balloons: [], amount: 0 }

function cartReducer(cart = initialCart, action: AnyAction ) {
    let newCart;

    switch (action.type) {
        case balloonsAndCartActionTypes.LOAD_CART: 
        newCart = action.cart
        break;

        default:
        newCart = cart
        break
    }


}

export default cartReducer
