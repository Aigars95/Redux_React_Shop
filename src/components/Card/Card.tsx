import './Card.scss';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import useTypedSelector from '../../hooks/useTypedSelector';
import Counter from '../Counter/Counter';

type cardProps ={
    title: string;
    price: number;
    imgSrc: string;

}

const Card: FC<cardProps> = ({
  title, price, imgSrc,
}) => {
  const dispatch = useDispatch();
  let productCount = 1;
  const countHandler = (count: number) => {
    productCount = count;
  };

  const SumPrice = () => {
    dispatch({ type: 'ADD_PURCHASE_SUM', payload: price * productCount });
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: {
        title, price, imgSrc, productCount,
      },
    });
  };
  return (

    <div className="card">
      <div className="card__image">
        <img className="image__item" src={imgSrc} alt="" />
      </div>
      <div className="card__body">
        <div className="card__content">
          <h2 className="heading2">
            {title}
          </h2>
          <h2 className="heading2">
            $
            {price.toFixed(2)}
          </h2>
          <Counter initialCount={1} getCount={countHandler} />
          <Button className="button" buttonName="add to cart" clickHundler={SumPrice} />
        </div>
      </div>
    </div>

  );
};

export default Card;
