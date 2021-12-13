import React from "react";
import { render, screen }from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import Balloon from "../../interfaces/balloonsInterface";
import List from "./List";
import userEvent from "@testing-library/user-event";


describe('When the List component is rendered', () => {

    test('Then size and type of balloon should be rendered', () => {
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

        render(<BrowserRouter><List balloon={balloon}/></BrowserRouter>);


        expect(screen.getByText(/standard/i)).toBeInTheDocument()
        userEvent.click(screen.getByTestId('add'))
    })
})