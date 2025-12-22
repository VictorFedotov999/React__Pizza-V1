import { Dispatch } from 'redux';
import { CartItemType } from '../types/componentsTypes/basketType';
import { cartApi } from '../../api/api';
import {
    AddProductCart,
    SetProductsCart,
    clearCart,
    removeCartProduct,
} from '../actions/basketActions';
import { BasketActionType } from '../types/componentsTypes/basketType';

type DispatchType = Dispatch<BasketActionType>;

export const addToCart = (productDate: CartItemType) => {
    return async (dispatch: DispatchType, getState: any) => {
        try {
            dispatch(AddProductCart(productDate));
            const updatedCart = getState().CartReducer.productsCart; // Исправляем путь
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
    return async (dispatch: DispatchType) => {
        try {
            await cartApi.clearCart();
            dispatch(clearCart());
        } catch (error) {
            console.error('Ошибка очистки корзины:', error);
        }
    };
};

export const removeCartProductThunk = (productId: string) => {
    return (dispatch: DispatchType) => {
        cartApi
            .removeCartProduct(productId)
            .then(() => {
                dispatch(removeCartProduct(productId));
            })
            .catch((error) => {
                console.error('Ошибка удаления товара:', error);
            });
    };
};
