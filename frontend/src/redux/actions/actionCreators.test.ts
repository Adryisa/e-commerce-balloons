import axios from 'axios'
import Balloon from '../../interfaces/balloonsInterface'
import User from '../../interfaces/userInterface'
import UserLogin from '../../interfaces/userLoginInterface'
import { addToCart, addUser, buy, decreaseBalloon, deleteOnCart, increaseBalloon, loadBalloons, loadCart, loadUser } from './actionCreators'
import actionTypes from './actionTypes'



jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Given the action creator file', () => {
    const response = {
        data: [
            { _id: '1', model_num: 'test'}
        ]
    }

    const balloon: Balloon = {
    _id: "61a4f3cb6773916ebdcb3008",
    model_num:"#001",
    type:"Standard",
    type_img_url:"https://res.cloudinary.com/dcy6vi33h/image/upload/v1638197358/types_img/standard_types_odnmzn.jpg",
    size:"13cm",
    color:"white",
    img_url:"https://res.cloudinary.com/dcy6vi33h/image/upload/v1638197378/standard/001_white_hikwgb.jpg",
    price:10,
    package:"50 und",
    }

    const user: User = {
        name: 'test', 
        lastname: 'test',
        email: 'test@',
        password: 'test'
    }

    const loggedUser: UserLogin = {
        email: 'test@',
        password: 'test'
    }

    const dispatch = jest.fn()

    afterEach(() => {
        jest.resetAllMocks()
    })

    describe('When the load Balloons is called', () => {
        test('Then it should dispatch the type and payload of load balloons', async () => {
            mockedAxios.get.mockResolvedValue(Promise.resolve(response))

            await loadBalloons()(dispatch)

            expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.LOAD_BALLOONS,
                balloons: response.data 
            })
        })
    })
    describe('When the load balloons is called', () => {
        test('Then it should dispatch the type and payload of error', async () => {
            mockedAxios.get.mockRejectedValue(new Error())

            await loadBalloons()(dispatch) 

                expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.FAILED_LOAD_BALLOONS,
                err: new Error()
            })
        })
    })
    describe('When the load cart is called', () => {
        test('Then it should dispatch the type and payload of load cart', async () => {
            mockedAxios.get.mockResolvedValue(Promise.resolve(response))

            await loadCart('test')(dispatch) 

            expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.LOAD_CART,
                carts: response.data 
            })
        })
    })
    describe('When the load cart is called', () => {
        test('Then it should dispatch the type and payload of error', async () => {
            mockedAxios.get.mockRejectedValue(new Error('test'))

            await loadCart('test')(dispatch) 

                expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.FAILED_LOAD_CART,
                err: new Error('test')
            })
        })
    })
    describe('When the add to cart is called', () => {
        test('Then the dispatch and payload with add to cart should be called', async () => {
            mockedAxios.post.mockResolvedValue(Promise.resolve(response))

            await addToCart('1', balloon)(dispatch)

            expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.ADD_TO_CART,
                payload: response.data
            })
        })
    })
    describe('When the add to cart is called', () => {
        test('Then the dispatch and payload with add to cart should be called', async () => {
            mockedAxios.post.mockRejectedValue(new Error())

            await addToCart('1', balloon)(dispatch)

            expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.FAILED_ADD_CART,
                err: new Error()
            })
        })
    })
    describe('When the delete on cart is called', () => {
        test('Then the dispatch should have been called with delete cart payload', async () => {
            mockedAxios.delete.mockResolvedValue(Promise.resolve(response.data))

            await deleteOnCart('test', balloon)(dispatch)

            expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.DELETE_CART_BALLOON,
                payload: {
                 _id: "61a4f3cb6773916ebdcb3008",
                 color: "white",
                 img_url: "https://res.cloudinary.com/dcy6vi33h/image/upload/v1638197378/standard/001_white_hikwgb.jpg",
                 model_num: "#001",
                 package: "50 und",
                 price: 10,
                 size: "13cm",
                 type: "Standard",
                 type_img_url: "https://res.cloudinary.com/dcy6vi33h/image/upload/v1638197358/types_img/standard_types_odnmzn.jpg",
                }
            })
        })
    })
    describe('When the delete on cart is called with a rejected value', () => {
        test('Then the error should have been called by dispatch', async () => {
            mockedAxios.delete.mockRejectedValue(new Error())

            await deleteOnCart('test', balloon)(dispatch)

            expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.FAILED_DELETE_CART_BALLOON,
                err: new Error()
             })
         })
    })
    describe('When the increase ballon is called', () => {
        test('Then the dispatch should have been called with the increase balloon amount type', async () => {
            mockedAxios.patch.mockResolvedValue(Promise.resolve(response))

            await increaseBalloon('1', balloon)(dispatch)

            expect(dispatch).toHaveBeenLastCalledWith({
                type: actionTypes.INCREASE_AMOUNT_BALLOON,
                payload: response.data
            })
        })
    })
    describe('When the increase ballon is called with a rejected value', () => {
        test('Then the dispatch should have been called with the increase balloon amount type', async () => {
            mockedAxios.patch.mockRejectedValue(new Error())

            await increaseBalloon('1', balloon)(dispatch)

            expect(dispatch).toHaveBeenLastCalledWith({
                type: actionTypes.FAILED_INCREASE_AMOUNT_BALLOON,
                err: new Error()
            })
        })
    })
    describe('When the increase ballon is called', () => {
        test('Then the dispatch should have been called with the increase balloon amount type', async () => {
            mockedAxios.patch.mockResolvedValue(Promise.resolve(response))

            await decreaseBalloon('1', balloon)(dispatch)

            expect(dispatch).toHaveBeenLastCalledWith({
                type: actionTypes.DECREASE_AMOUNT_BALLOON,
                payload: response.data
            })
        })
    })
    describe('When the increase ballon is called', () => {
        test('Then the dispatch should have been called with the increase balloon amount type', async () => {
            mockedAxios.patch.mockRejectedValue(new Error())

            await decreaseBalloon('1', balloon)(dispatch)

            expect(dispatch).toHaveBeenLastCalledWith({
                type: actionTypes.FAILED_DECREASE_AMOUNT_BALLOON,
                err: new Error()
            })
        })
    })
    describe('When the load user is called', () => {
        test('Then the dispatch shoudl have been called with the user', async () => {

            await loadUser(loggedUser)(dispatch)

            expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.LOAD_USER,
            payload: loggedUser
            })
        })
    })
    describe('When the add user is called', () => {
        test('Then the dispatch with the add user type should have been called', async () => {

            await addUser(user)(dispatch)

            expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.ADD_USER,
                payload: user
            })
        })
    })
    // describe('When the add user is called with a rejected value', () => {
    //     test('Then the error dispatch should have been called', () => {
    //         dispatch.mockImplementation(() => {
    //             return Promise.reject(new Error())
    //         })

    //         try {
    //             addUser(user)(dispatch)

    //         } catch (err) {
    //             expect(dispatch).toHaveBeenCalled()
    //         }
    //     })

    // PROBAR: sacarlo a otro archivo para que dispatch devuelva un error
    // })
    describe('When the buy action is called', () => {
        test('then the buy payload should have been called', async () => {
            mockedAxios.patch.mockResolvedValue(Promise.resolve(response))

            await buy('test')(dispatch)

            expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.BUY,
                payload: {
                    data: [
                        { _id: '1', 
                        model_num: 'test'
                        }
                    ]
                }
            })
        })
    })
    describe('When the buy action is called with a rejected value', () => {
        test('Then the dispatch error should have been called', async () => {
            mockedAxios.patch.mockRejectedValue(new Error())

            await buy('test')(dispatch)

            expect(dispatch).toHaveBeenCalledWith({
                type: actionTypes.FAILED_BUY,
                err: new Error()
            })
        })
    })
})