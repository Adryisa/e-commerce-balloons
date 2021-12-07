import React from 'react';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';
import ListShop from './pages/List-shop/ListShop';


function App() {
  return (
    <BrowserRouter>   
    <main  className="main" id="main">
      <Sidebar />
      <div className="App">
        <Header />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<ListShop />} />
        </Routes>
    </div> 
    </main>
    </BrowserRouter>
 
  );
}

export default App;
