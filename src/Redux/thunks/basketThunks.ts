import { Dispatch } from 'redux';
import { CartItemType, BasketActionType } from '../types/basketType';
import { cartApi } from '../../api/api';
import {
    AddProductCart,
    SetProductsCart,
    clearCart,
    removeCartProduct,
    plusCountProduct,
    minusCountProduct,
} from '../actions/basketActions';
import { AppStateType } from '../reduxStore';

type DispatchType = Dispatch<BasketActionType>;
type GetStateType = () => AppStateType;

export const addToCart = (product: CartItemType) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        const existingItem = getState().CartReducer.productsCart.find((i) => i.key === product.key);

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                productCount: existingItem.productCount + 1,
            };

            dispatch(
                SetProductsCart(
                    getState().CartReducer.productsCart.map((item) =>
                        item.key === updatedItem.key ? updatedItem : item,
                    ),
                ),
            );

            await cartApi.updateCartItem(updatedItem.key, updatedItem);
        } else {
            const newItem = { ...product, productCount: 1 };

            dispatch(AddProductCart(newItem));
            await cartApi.addToCart(newItem);
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

export const removeCartProductThunk = (key: string) => {
    return (dispatch: DispatchType) => {
        cartApi
            .removeCartProduct(key)
            .then(() => {
                dispatch(removeCartProduct(key));
            })
            .catch((error) => {
                console.error('Ошибка удаления товара:', error);
            });
    };
};

export const plusCountProductThunk = (key: string) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        const item = getState().CartReducer.productsCart.find((i) => i.key === key);

        if (!item) return;

        const updatedItem = { ...item, productCount: item.productCount + 1 };

        dispatch(
            SetProductsCart(
                getState().CartReducer.productsCart.map((i) => (i.key === key ? updatedItem : i)),
            ),
        );

        await cartApi.updateCartItem(updatedItem.key, updatedItem);
    };
};

export const minusCountProductThunk = (key: string) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        const item = getState().CartReducer.productsCart.find((i) => i.key === key);

        if (!item) return;

        if (item.productCount === 1) {
            await cartApi.removeCartProduct(key);
            dispatch(removeCartProduct(key));
        } else {
            dispatch(minusCountProduct(key));

            const updatedItem = {
                ...item,
                productCount: item.productCount - 1,
            };

            await cartApi.updateCartItem(updatedItem.key, updatedItem);
        }
    };
};
export const CreateKeyProductCart = (id: string, selectedSize: number, selectedType: number) =>
    `${id}_${selectedSize}_${selectedType}`;
