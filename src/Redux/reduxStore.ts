import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import ProductsReducer from './Reducers/ProductsReducer';
import CartReducer from './Reducers/СartReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

let rootReducer = combineReducers({
    PageProduct: ProductsReducer,
    CartReducer: CartReducer,
});

type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>;
// @ts-ignore
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
