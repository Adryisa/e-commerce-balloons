import React from 'react';
import { render, screen }from '../../utils/test-utils'
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Balloon from "../../interfaces/balloonsInterface";
import List from './List';
import userEvent from "@testing-library/user-event";


describe('When the list component is rendered', () => {
    const balloon: Balloon = {
        model_num: 'test', 
        type: 'standard',
        type_img_url: 'test',
        size: 'test', 
        color: 'white',
        img_url: 'test', 
        price: 2, 
        package: 'fifty'
    }
    
    const navigate = jest.fn()

    beforeEach(() => {
         render(<BrowserRouter><List balloon={balloon}/></BrowserRouter>);
            })

    test('Then the list should be render but cannot add balloons', () => {

        expect(screen.getByText(/standard/i)).toBeInTheDocument()
        userEvent.click(screen.getByTestId('add'))
    })
})


describe('When the List component is rendered', () => {
        const preloadedState = {
                        user: {
                                email: 'holi@',
                                password: '123',
                                cart:'hola'
                        }
                }
                const balloon: Balloon = {
                    model_num: 'test', 
                    type: 'standard',
                    type_img_url: 'test',
                    size: 'test', 
                    color: 'white',
                    img_url: 'test', 
                    price: 2, 
                    package: 'fifty'
                }

                beforeEach(() => {
                     render(<BrowserRouter><List balloon={balloon}/></BrowserRouter>, {preloadedState});
                })
    test('Then size and type of balloon should be rendered', () => {
        userEvent.click(screen.getByTestId('add'))
    })
})