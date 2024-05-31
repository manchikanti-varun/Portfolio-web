import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NavigationBar from './components/Navbar';
import Templates from './components/pages/Templates';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';
import SigninForm from './components/pages/SignIn';
import SignUpForm from './components/pages/SignUp';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <NavigationBar cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
};

export default App;
