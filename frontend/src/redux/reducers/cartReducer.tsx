import balloonsAndCartActionTypes from "../actions/actionTypes";
import { AnyAction } from "redux";

const initialCart = { balloons: [], amount: 68 }

function cartReducer(cart = initialCart, action: AnyAction ) {
    let newCart;
    console.log('REDUCER', cart)

    switch (action.type) {
        case balloonsAndCartActionTypes.LOAD_CART: 
        newCart = action.carts
        break;

        default:
        newCart = cart
        break
    }
    return newCart
}

export default cartReducer
