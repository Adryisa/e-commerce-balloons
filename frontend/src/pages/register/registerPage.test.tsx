import React from "react";
import { screen, render } from '../../utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import RegisterPage from "./registerPage";


describe('Given the login page component', () => {
    test('Then the login title should be rendered', () => {

        render (
            <BrowserRouter><RegisterPage/></BrowserRouter>
        )
        expect(screen.getAllByRole('img')).toHaveLength(1)

    })
})