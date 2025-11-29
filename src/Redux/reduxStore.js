import { combineReducers, createStore } from 'redux';

import ProductsReducer from './Reducers/ProductsReducer';
import BasketReducer from './Reducers/BasketReducer';
let reducers = combineReducers({
    PageProduct: ProductsReducer,
    PageBasket: BasketReducer,
});

let store = createStore(reducers);
export default store;
