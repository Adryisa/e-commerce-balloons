import React from 'react';
import { Provider } from 'react-redux';
import './App.scss'
import Header from './components/header/header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';
import configureStore from './redux/store/store';

const store = configureStore({});

function App() {
  return (
    <main  className="main" id="main">
      <Sidebar />
      <Provider store={store}>    
      <div className="App">
        <Header />
      <Home />
    </div> 
    </Provider>
    </main>

  );
}

export default App;
