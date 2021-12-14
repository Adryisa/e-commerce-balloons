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

// describe('When there is not any user logged', () => {
//     const initialState = {
//         initialState: {
//             user: {
//             email: 'holi@',
//             password: '123'
//             }
//         }
      
//     }
//        render( <BrowserRouter><Header /> </BrowserRouter>, initialState)

//     test('Then a link should be on the document', () => {

//         expect(screen.getByAltText(/cart icon link/i)).toBeInTheDocument()
//     })
// })