import React from 'react';
import {render, screen} from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom'
import Balloon from '../../interfaces/balloonsInterface';
import ListShop from './ListShop';


describe('Given the component listShop', () => {
    describe('When is rendered', () => {
        const preloadedState = {
                balloons: [  
                    {
                    _id: 'testtest',
                    model_num: 'test', 
                    type: 'standard',
                    type_img_url: 'test',
                    size: 'test-size', 
                    color: 'white',
                    img_url: 'test', 
                    price: 2, 
                    package: 'fifty'
                    }
                        ]

            }
          beforeEach(() => {
                 render (
                <BrowserRouter><ListShop/></BrowserRouter>, {preloadedState}
            ) 
            })
            test('Then there should be a title and a list of balloons', () => {
            expect(screen.getByText(/shop/i)).toBeInTheDocument()
            expect(screen.getByText(/standard/i)).toBeInTheDocument()
        })
    })
})