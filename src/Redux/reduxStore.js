import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import ProductsReducer from './Reducers/ProductsReducer';
import CartReducer from './Reducers/СartReducer';

let reducers = combineReducers({
    PageProduct: ProductsReducer,
    CartReducer: CartReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
