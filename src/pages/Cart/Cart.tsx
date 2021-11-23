import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import CartProductRow from '../../components/CartProductRow/CartProductRow';

const Cart = () => {
  const cartProducts = useTypedSelector((state) => state.cartProducts);

  return (
    <div>
      {cartProducts.length > 0 && cartProducts
        .map((product, index) => (
          <CartProductRow
            productIndex={index}
            title={product.title}
            price={product.price}
            imgSrc={product.imgSrc}
            productCount={product.productCount}
          />
        ))}
      <div>
        {`total: ${cartProducts.reduce((prev, cur) => prev + cur.price, 0).toFixed(2)}`}
      </div>
    </div>
  );
};
export default Cart;
