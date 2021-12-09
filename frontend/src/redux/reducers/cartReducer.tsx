import balloonsAndCartActionTypes from "../actions/actionTypes";
import { AnyAction } from "redux";
import Balloon from "../../interfaces/balloonsInterface";

const initialCart = { balloons: [], amount: 0, totalPrice: 0 }

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
            }) : [ ...cart.balloons, action.addedBalloon], 
            totalPrice:  cart.totalPrice + action.balloonId.amount + action.balloonId.price
        }
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
