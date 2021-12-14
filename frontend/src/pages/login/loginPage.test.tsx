import React from "react";
import { screen, render } from '../../utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from "./LoginPage";

describe('Given the login page component', () => {
    test('Then the login title should be rendered', () => {

        render (
            <BrowserRouter><LoginPage/></BrowserRouter>
        )
        expect(screen.getByText(/IF YOU ARE NOT REGISTERED/i)).toBeInTheDocument()

    })
})