import React from 'react';
import './App.scss'
import Header from './components/header/header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';


function App() {
  return (
    <main  className="main" id="main">
      <Sidebar />
      <div className="App">
        <Header />
      <Home />
    </div> 
    </main>
  );
}

export default App;
