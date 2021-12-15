import axios from 'axios'
import UserLogin from '../../interfaces/userLoginInterface'
import userServices from './userServices'

jest.mock('axios')


describe('Given the userServices function, log in', () => {
    test('When is called then a user should have been posted', async () => {
        const response = userServices();
        
        expect(JSON.stringify(response)).toBe(JSON.stringify({
            logIn: function(user: UserLogin) { 
                const urlBase = 'http://localhost:3200/api'
         
               const response =  axios.post(`${urlBase}/login`, {    
                   email: user.email, password: user.password   
                }).then((result) => {
                    localStorage.setItem('user', JSON.stringify(result.data.token))
         
                    return result.data.user
         
                }).catch((err) => console.log(err))
         
                return response;
            },
            logOut: function() {
                localStorage.removeItem('user')
                window.location.reload()
            }
        }))
    })
})

describe('Given the userServices log in', () => {
    describe('When is called with valid data', () => {
        test('Then it should return data', async() => {
            axios.post.mockResolvedValue({data: {
                            token: 'testettstetst',
                            user: 'tetstetstestets'
                        }})
            const response = await userServices().logIn({email: 'test', password: 'test'})

            expect(response).toEqual('tetstetstestets')
        })
    })
})

describe('Given the userServices log in', () => {
    describe('When is called with valid data', () => {
        test('Then it should return data', async() => {
            axios.post.mockRejectedValue({})

        expect(async () =>  await userServices().logIn({email: 'test', password: 'test'})).rejects.toThrow()
        })
    })
})

describe('Given the userServies logout', () => {
    describe('When is called', () => {
        test('Then window reload should be called',  () => {
            const original = window.location;

            const reloadFn = () => {
              window.location.reload(true);
            };
            Object.defineProperty(window, 'location', {
                configurable: true,
                value: { reload: jest.fn() },
              });
            

            userServices().logOut() 

            expect(window.location.reload).toHaveBeenCalled();
        })
    })
})