import React from "react";
import { fireEvent, render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import Register from "./Register";
import * as actionsMock from "../../redux/actions/actionCreators";
import registerUser from "../../services/userServices/registerService";

jest.mock("../../redux/actions/actionCreators",  () => {
    const creators = {
        addUser: ()=>({
          type: 'test'
      })
    };
    return creators;
  })

  jest.mock('../../services/userServices/registerService')

  registerUser.mockResolvedValue({
      name: 'test',
      lastname: 'test',
      email: 'test',
      password: 'test',
  })

describe('Given the register component', () => {
    test('Then the form register should be rendered', () => {
        render (
            <BrowserRouter><Register/></BrowserRouter>
        )

        expect(screen.getByTestId('dos')).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/lastname/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

        const inputname = screen.getByTestId('dos')
        const inputLastname = screen.getByPlaceholderText(/lastname/i)
        const inputEmail = screen.getByPlaceholderText(/Email/i)
        const inputPasswrd = screen.getByPlaceholderText(/password/i)

        fireEvent.change(inputname, { target: { value: 'test' } } )
        fireEvent.change(inputLastname, { target: { value: 'test' } } )
        fireEvent.change(inputEmail, { target: { value: 'test' } } )
        fireEvent.change(inputPasswrd, { target: { value: 'test' } } )
        fireEvent.submit(screen.getByText(/register/i))
    })
})