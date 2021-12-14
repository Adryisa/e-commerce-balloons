import React from "react";
import { fireEvent, render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import LogOut from "./logOut";
import * as userServices from "../../services/userServices/userServices";

jest.mock('../../services/userServices/userServices', () => {
    const mUserService = () =>  ({
      logIn: jest.fn(),
      logOut: jest.fn()
    })
    return mUserService;
  })


describe('Given the login component', () => {  
        beforeEach(() => {
            render( <BrowserRouter><LogOut /> </BrowserRouter>)
            })
    test('Then a button with login should be rendered', () => {
    expect(screen.getByText(/login/i)).toBeInTheDocument()
     })
})

describe('Given the login component', () => {
    describe('When a user is logged', () => {
        const preloadedState = {
            balloons: [], 
            cart: { 
                balloons: [], 
                amount: 0 
            },
            user: {
                email: 'holi@',
                password: '123',
                cart:'hola'
        },      
    }
        beforeEach(() => {
            render( <BrowserRouter><LogOut /> </BrowserRouter>, {preloadedState})

        })
        test('Then there should be a button log out', () => {
            expect(screen.getByText(/logout/i)).toBeInTheDocument()
            fireEvent.click(screen.getByText(/logout/i))
            expect(userServices).toHaveBeenCalled
        }) 
    })
})