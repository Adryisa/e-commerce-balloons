import React from 'react';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import ListShop from './pages/list-shop/ListShop';
import Footer from './components/footer/Footer';


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
        <Footer />
    </div> 
    </main>
    </BrowserRouter>
 
  );
}

export default App;
