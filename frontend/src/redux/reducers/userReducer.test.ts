import actionTypes from '../actions/actionTypes'
import cartReducer from './cartReducer'
import userReducer from './userReducer'
import reducers from '../reducers/index'

describe('Given the user Reducer function', () => {
    test('When LOAD_USER is called, then it should return an object', () => {
        const initialState: any = {}

        const action = {
            type: actionTypes.LOAD_USER,
            payload: {
                email: 'test',
                password: 'test'
            }
        }
        expect(userReducer(initialState, action)).toEqual({
            email: 'test',
            password: 'test'
        })
    })
    test('When the ADD_USER is called, then it should return an object', () => {
        let state;

        state = reducers(
            {
                balloons:[],
                cart:{balloons:[],amount:0},
                user:{}
            }, 
            {type:'ADD_USER',
            payload:
            {newUser:
                {
                    name:'miguekl',
                    lastname:'mifuel',
                    email:'miguel',
                    password:'$2a$10$sYdzclTPXd5KJG80DeXsQewvvum.y/2.0q2S5fhtA9yEUV26arQkq',
                    _id:'61b76ab69bf65043c6813f02',
                    __v:0,
                    cart:'61b76ab69bf65043c6813f04'
                },
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWlndWVrbCIsImlkIjoiNjFiNzZhYjY5YmY2NTA0M2M2ODEzZjAyIiwiaWF0IjoxNjM5NDEwMzU4fQ.wcr_8QHUeADMFZB1v6FRj1zefLzdJvjhtBoGl8L07Hs'
            }});
            
        expect(state).toEqual({balloons:[],cart:{balloons:[],amount:0},user:{name:'miguekl',lastname:'mifuel',email:'miguel',password:'$2a$10$sYdzclTPXd5KJG80DeXsQewvvum.y/2.0q2S5fhtA9yEUV26arQkq',_id:'61b76ab69bf65043c6813f02',__v:0,cart:'61b76ab69bf65043c6813f04'}});
      
    })
})