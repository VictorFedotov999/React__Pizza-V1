import { Dispatch } from 'redux';
import { ProductsActionType, CartItemType } from '../types/productsType';
import { pizzasApi, cartApi } from '../../api/api';
import {
    SetProducts,
    AddProductCart,
    SetProductsCart,
    clearCart,
    removeCartProduct,
} from '../actions/productsActions';

type DispatchType = Dispatch<ProductsActionType>;

export const getPizzas = () => {
    return (dispatch: DispatchType) => {
        pizzasApi.getPizzas().then((data) => {
            dispatch(SetProducts(data));
        });
    };
};

export const addToCart = (productDate: CartItemType) => {
    return async (dispatch: any, getState: any) => {
        try {
            dispatch(AddProductCart(productDate));
            const updatedCart = getState().PageProduct.productsCart;
            await cartApi.clearCart();
            for (const item of updatedCart) {
                await cartApi.addToCart(item);
            }
            console.log('Корзина синхронизирована с сервером');
        } catch (error) {
            console.error('Ошибка синхронизации корзины:', error);
        }
    };
};
export const getProductCart = () => {
    return (dispatch: DispatchType) => {
        cartApi.getProductCart().then((data) => {
            dispatch(SetProductsCart(data));
        });
    };
};

export const removeCartThunk = () => {
    return async (dispatch: any) => {
        try {
            await cartApi.clearCart();
            dispatch(clearCart());
        } catch (error) {}
    };
};

export const removeCartProductThunk = (productId: string) => {
    return (dispatch: any) => {
        cartApi.removeCartProduct(productId).then(() => {
            dispatch(removeCartProduct(productId));
        });
    };
};
