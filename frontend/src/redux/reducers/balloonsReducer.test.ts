import balloonsReducer from "./balloonsReducer";
import actionTypes from '../actions/actionTypes'

describe('Given the balloonsReducer function', () => {
    test('When the actionType is LOAD_BALLOONS, then should return an array of objects', () => {
        const initialState: any = [];

        const action = {
            type: actionTypes.LOAD_BALLOONS,
            balloons: [{
                _id: '1', 
                model_num: 'test balloon'
            }]
        }
        expect(balloonsReducer(initialState, action)).toEqual([{
            _id: '1', 
            model_num: 'test balloon'
        }])
    })
})