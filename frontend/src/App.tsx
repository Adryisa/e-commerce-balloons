import React from 'react';
import { Provider } from 'react-redux';
import './App.scss'
import Home from './pages/Home/Home';
import configureStore from './redux/store/store';

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>    
      <div className="App">
      <Home />
    </div>
    </Provider>
  );
}

export default App;
