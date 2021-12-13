import cartReducer from "./cartReducer";
import actionTypes from '../actions/actionTypes'


describe('Given the cart reducer function', () => {
    test('When the action type is LOAD_CART, then should return an object', () => {
        const initialState: any = {}
        const action = {
            type: actionTypes.LOAD_CART,
            carts: {
                balloons: [
                    {
                    balloonId: 'test',
                    }
                    ],
                    amount: 1  
            }
        }
        expect(cartReducer(initialState, action)).toEqual({
            balloons: [
                {
                balloonId: 'test',
                }
                ],
                amount: 1  
        })
    })
    test('When the action Type = ADD_TO_CART, then should return an object inside of balloonId', () => {
        const initialState: any = {}
        const action = {
            type: actionTypes.ADD_TO_CART,
            payload: {
                balloons: [
                    {
                    balloonId: 'test',
                    }
                    ],
                    amount: 1  
            }
        }
        expect(cartReducer(initialState, action)).toEqual({
            balloons: [
                {
                balloonId: 'test',
                }
                ],
                amount: 1  
        })
    })
    test('When the action type = DELETE_CART_BALLOON, then should return an array', () => {
        const initialState: any = {
            balloons: [
                {
                balloonId: 'test',
                },
                {
                balloonId: 'test2',
                },
                ],
        }
        const action = {
            type: actionTypes.DELETE_CART_BALLOON,
            payload: {
                balloons:  [
                    {
               balloonId: 'test2',
                    }
                ]
                     }
    
        }
        expect(cartReducer(initialState, action)).toEqual(
            {
            balloons: [
                {
                balloonId: 'test',
                },
                {
                balloonId: 'test2'
                }
            ]
        })
    })
    test('When action type = INCREASE_AMOUNT_BALLOON, then should return the same array with more amount', () => {
        const initialState: any = {
            balloons: [
                {
                    balloonId: 'test',
                    amount: 1
                }
            ]
        }
        const action = {
            type: actionTypes.INCREASE_AMOUNT_BALLOON,
            payload: {
                balloons: [
                    {
                        balloonId: 'test',
                        amount: 1
                    }
                ]
            }
        }

        expect(cartReducer(initialState, action)).toEqual({
            balloons: [
                {
                    balloonId: 'test',
                    amount: 1
                }
            ]
        })
    })
    test('When action type = INCREASE_AMOUNT_BALLOON, then should return the same array with more amount', () => {
        const initialState: any = {
            balloons: [
                {
                    balloonId: 'test',
                    amount: 1
                }
            ]
        }
        const action = {
            type: actionTypes.DECREASE_AMOUNT_BALLOON,
            payload: {
                balloons: [
                    {
                        balloonId: 'test',
                        amount: 1
                    }
                ]
            }
        }

        expect(cartReducer(initialState, action)).toEqual({
            balloons: [
                {
                    balloonId: 'test',
                    amount: 1
                }
            ]
        })
    })
    test('When the action type BUY is called, then it should return an empty object', () => {
        const initialState: any = {
            balloons: [
                {
                    balloonId: 'test',
                    amount: 1
                }
            ]
        }
        const action = {
            type: actionTypes.BUY,
            payload: {}
        }
        expect(cartReducer(initialState, action)).toEqual([{"amount": 1, "balloonId": "test"}, undefined])
    })
})