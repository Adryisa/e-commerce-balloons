
import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';


describe('Given the component footer', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      );

      expect(screen.getByText(/home/i)).toBeInTheDocument();
      expect(screen.getByText(/balloons/i)).toBeInTheDocument();
      expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    });
  });
});