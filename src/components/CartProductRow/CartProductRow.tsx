import React from 'react';
import './CartProductRow.scss';
import { useDispatch } from 'react-redux';
import Counter from '../Counter/Counter';

type CartProductRowProps = {
  productIndex: number;
  title: string;
  price: number;
  imgSrc: string;
  productCount: number;
}

const CartProductRow = ({
  productIndex, title, price, imgSrc, productCount,
}:CartProductRowProps) => {
  const dispatch = useDispatch();

  const getNewCount = (count: number) => {
    dispatch({ type: 'NEW_PRODUCT_COUNT', arrayIndex: productIndex, payload: count });
  };
  const onCrossClick = () => {
    dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', payload: productIndex });
    dispatch({ type: 'REMOVE_PURCHASE_SUM', payload: price * productCount });
  };
  return (
    <div className="product__row--wrapper">
      <div className="product__row">
        <div
          className="product__row__cross"
          onClick={onCrossClick}
        >
          x
        </div>
        <div className="product__row__image">
          <img className="image__product" src={imgSrc} alt="Product" />
        </div>
        <div className="product__row__content">
          <span>{title}</span>
          <span>{`$${price}`}</span>
          <Counter getCount={getNewCount} initialCount={productCount} />
          <span>{`$${productCount * price}`}</span>
        </div>
      </div>
    </div>
  );
};
export default CartProductRow;
