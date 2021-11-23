import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../components/Card/Card';
import productData from '../data/productData';
import Button from '../components/Button/Button';
import useTypedSelector from '../hooks/useTypedSelector';

const Home = () => {
  const products = useTypedSelector((state) => state.products);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch({ type: 'SHOW_PRODUCTS' });
  };
  return (
    <div className="store--wrapper">
      {products.map(({
        productName,
        productPrice,
        productImage,
      }) => <Card title={productName} price={productPrice} imgSrc={productImage} />)}
      <Button className="button" buttonName="Load more..." clickHundler={clickHandler} />
    </div>
  );
};

export default Home;
