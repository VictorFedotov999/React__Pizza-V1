import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import CartReducer from './reducers/basketReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

import ProductsReducer from './reducers/productsReducer';
let rootReducer = combineReducers({
    PageProduct: ProductsReducer,
    CartReducer: CartReducer,
});

type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>;
// @ts-ignore
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
