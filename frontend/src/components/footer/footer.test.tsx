import React from 'react';
import { render, screen } from '../../utils/test-utils'
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

describe('When the footer component is rendered', () => {
    test('Then partyando event should be rendered', () => {
        render (
            <BrowserRouter><Footer /></BrowserRouter>
        )
        expect(screen.getByText(/Partyando events/i)).toBeInTheDocument()
        expect(screen.getAllByRole('img')).toHaveLength(3)
    })
})