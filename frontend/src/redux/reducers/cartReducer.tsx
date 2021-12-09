import balloonsAndCartActionTypes from "../actions/actionTypes";
import { AnyAction } from "redux";
import Balloon from "../../interfaces/balloonsInterface";

const initialCart = { balloons: [], amount: 0, totalPrice: 'holii' }

function cartReducer(cart = initialCart, action: AnyAction ) {
    let newCart;

    
    switch (action.type) {
        case balloonsAndCartActionTypes.LOAD_CART: 
        newCart = action.carts
        break;
        case balloonsAndCartActionTypes.ADD_TO_CART: 
        newCart = {
            balloons: cart.balloons.some((item: any) => item.balloonId === action.balloonId) ? 
            cart.balloons.map((item: any) => {
                if (item.balloonId === action.balloonId) {
                    return {
                        ...item, 
                        amount: item.amount + action.balloonId.amount
                    }
                }
                return item;
            }) : [ ...cart.balloons, action.balloon], 
            totalPrice:  cart.totalPrice + action.balloonId.amount + action.balloonId.price
        }
        break;
        default:
        newCart = cart
        break
    }
    return newCart
}

export default cartReducer
