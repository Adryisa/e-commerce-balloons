import React from 'react'
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import userEvent from '@testing-library/user-event';

describe('Given the home component', () => {
    describe('When its rendered', () => {
        test('Then find your products should be there', () => {

            render (
                <BrowserRouter>
                    <Home />
                    </BrowserRouter>
            )
            expect(screen.getByText(/Find your products:/i)).toBeInTheDocument()
            expect(screen.getByText(/balloons/i)).toBeInTheDocument()
            userEvent.click(screen.getByTestId('2'))

        })
    })
})