import balloonsAndCartActionTypes from "../actions/actionTypes";
import { AnyAction } from "redux";

const initialCart = { balloons: [], amount: 0 }

function cartReducer(cart = initialCart, action: AnyAction ) {
    let newCart;

    
    switch (action.type) {
        case balloonsAndCartActionTypes.LOAD_CART: 
        newCart = action.carts
        break;
        case balloonsAndCartActionTypes.ADD_TO_CART: 
        newCart = action.payload
        break;
        case balloonsAndCartActionTypes.DELETE_CART_BALLOON:
        newCart = {...cart, balloons: cart.balloons.filter((item: any) => item.balloonId._id !== action.payload)}
        break;
        case balloonsAndCartActionTypes.INCREASE_AMOUNT_BALLOON:
        case balloonsAndCartActionTypes.DECREASE_AMOUNT_BALLOON:
            newCart = {...cart, ...action.payload}
        break
        default:
        newCart = cart
        break
    }
    return newCart
}

export default cartReducer
