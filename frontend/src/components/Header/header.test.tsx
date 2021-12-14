import React from 'react';
import { render, screen } from '../../utils/test-utils'
import Header from './header'
import { BrowserRouter } from 'react-router-dom';

describe('When the header component is rendered', () => {
    beforeEach(() => {
        render(
            <BrowserRouter><Header /></BrowserRouter>
            );
   
   })
    test('Then 3 imgs should be on the component', () => {
        
            expect(screen.getAllByRole('img')).toHaveLength(6)
            expect(screen.getByText(/Home/i)).toBeInTheDocument()
    })
})

describe('When there is not any user logged', () => {
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
    render( <BrowserRouter><Header /> </BrowserRouter>, {preloadedState})

})
    test('Then a link should be on the document', () => {
        expect(screen.getByAltText(/cart icon link/i)).toBeInTheDocument()
    })
})