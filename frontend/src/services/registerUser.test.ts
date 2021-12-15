import axios from "axios";
import registerUser from "./userServices/registerUser";

jest.mock('axios')

describe('Given the registerUser', () => {
    describe('When is called with a valid data', () => {
        test('Then it should return the data', async () => {
            axios.post.mockResolvedValue({
                data: {
                    name: 'test',
                    lastname: 'test',
                    email: 'testes',
                    password: 'hoho'
                }
            })

          const response = await registerUser({
                name: 'test',
                lastname: 'test',
                email: 'testes',
                password: 'hoho'
            })

            expect(response).toEqual({"email": "testes", "lastname": "test", "name": "test", "password": "hoho"})
        })
    })
})

describe('Given the userServices log in', () => {
    describe('When is called with valid data', () => {
        test('Then it should return data', async() => {
            axios.post.mockRejectedValue({})

        expect(async () =>  await registerUser({"email": "testes", "lastname": "test", "name": "test", "password": "hoho"})).rejects.toThrow()
        })
    })
})