import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home/Home";
import ListShop from "./pages/List-shop/ListShop";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/registerPage";

function App() {
  return (
    <BrowserRouter>
      <main className="main" id="main">
        <Sidebar />
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/shop" element={<ListShop />} />
            <Route path="/cart/:id" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
