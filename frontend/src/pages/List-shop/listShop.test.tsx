import React from 'react';
import {render, screen} from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom'
import ListShop from './ListShop';


describe('Given the component listShop', () => {
    describe('When is rendered', () => {

          beforeEach(() => {
                 render (
                <BrowserRouter><ListShop/></BrowserRouter>
            ) 
            })
        test('Then there should be a title and a list of balloons', () => {
            expect(screen.getByText(/shop/i)).toBeInTheDocument()
        })
    })
})