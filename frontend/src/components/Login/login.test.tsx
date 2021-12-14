import React from "react";
import { fireEvent, render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import Login from "./login";
import userEvent from "@testing-library/user-event";

describe('Given the login component', () => {
    test('Then title login should be rendered', () => {

        render (
            <BrowserRouter><Login/></BrowserRouter>
        )

        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

        const inputEmail = screen.getByPlaceholderText(/Email/i)
        const inputPasswrd = screen.getByPlaceholderText(/password/i)

        fireEvent.change(inputEmail, { target: { value: 'test' } } )
    })
})