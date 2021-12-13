import React from 'react';
import { render, screen } from '../../utils/test-utils'
import Header from './header'
import { BrowserRouter } from 'react-router-dom';

describe('When the header component is rendered', () => {
    test('Then 3 imgs should be on the component', () => {
        render(
            <BrowserRouter><Header /></BrowserRouter>
            );
            expect(screen.getAllByRole('img')).toHaveLength(6)
            expect(screen.getByText(/Home/i)).toBeInTheDocument()
    })
})