import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import productData from './data/productData';

let productShowCount = 9;

interface PurchasesState {
  purchasesSum: number;
  products: any[];
  cartProducts: any [];
}

const defaultState: PurchasesState = {
  purchasesSum: 0,
  products: productData.filter((product, index) => index < productShowCount),
  cartProducts: [],
};

interface PurchaseAction {
  type: string;
  arrayIndex?: number;
  payload?: any;
}

const reducer = (state = defaultState, action: PurchaseAction) => {
  switch (action.type) {
    case 'ADD_PURCHASE_SUM':
      return { ...state, purchasesSum: state.purchasesSum + action.payload };

    case 'REMOVE_PURCHASE_SUM':
      return { ...state, purchasesSum: state.purchasesSum - action.payload };

    case 'SHOW_PRODUCTS':
      productShowCount += 9;
      return { ...state, products: productData.filter((product, index) => index < productShowCount) };

    case 'ADD_PRODUCT_TO_CART':
      return { ...state, cartProducts: [...state.cartProducts, action.payload] };

    case 'REMOVE_PRODUCT_FROM_CART':
      return { ...state, cartProducts: [...state.cartProducts.filter((product, index) => index !== action.payload)] };

    case 'NEW_PRODUCT_COUNT':
      return {
        ...state,
        cartProducts: [...state.cartProducts.map(({
          title, price, imgSrc, productCount,
        }, index) => {
          if (index === action.arrayIndex) {
            return {
              title, price, imgSrc, productCount: action.payload,
            };
          }
          return {
            title, price, imgSrc, productCount,
          };
        })],
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export type RootState = ReturnType<typeof reducer>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
