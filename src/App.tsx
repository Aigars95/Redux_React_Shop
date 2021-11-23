import React, { useState } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useTypedSelector from './hooks/useTypedSelector';
import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import logo from './logo.png';

const App = () => {
  const dispatch = useDispatch();
  const purchaseSum = useTypedSelector((state) => state.purchasesSum);
  console.log(purchaseSum);
  return (
    <div className="App">

      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <Link to="/">
              <img
                className="image__logo"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="nav">
            <Link className="nav__item" to="/">Menu</Link>
            <Link className="nav__item" to="/">Delivery</Link>
            <Link className="nav__item" to="/">Contacts</Link>
          </div>
          <div className="cart__mini">
            <Link className="nav__item" to="/cart">
              <FaShoppingCart />
              {` $ ${purchaseSum.toFixed(2)}`}
            </Link>
          </div>
        </div>
      </div>
      <div className="App_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
