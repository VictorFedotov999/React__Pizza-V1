import { Dispatch } from 'redux';
import { CartItemType } from '../types/basketType';
import { cartApi } from '../../api/api';
import {
    AddProductCart,
    SetProductsCart,
    clearCart,
    removeCartProduct,
    plusCountProduct,
    minusCountProduct,
} from '../actions/basketActions';
import { BasketActionType } from '../types/basketType';
import { AppStateType } from '../reduxStore'; // ДОБАВЬ ЭТОТ ИМПОРТ!

type DispatchType = Dispatch<BasketActionType>;
type GetStateType = () => AppStateType; // ТИП для getState

export const addToCart = (productDate: CartItemType) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        try {
            dispatch(AddProductCart(productDate));
            const updatedCart = getState().CartReducer.productsCart;
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

export const removeCartProductThunk = (productId: number) => {
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

export const plusCountProductThunk = (id: number, selectedType: number, selectedSize: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        try {
            dispatch(plusCountProduct(id, selectedType, selectedSize));

            const updatedProduct = getState().CartReducer.productsCart.find(
                (item: CartItemType) =>
                    item.id === id &&
                    item.selectedType === selectedType &&
                    item.selectedSize === selectedSize,
            );

            if (updatedProduct) {
                await cartApi.removeCartProduct(id);
                await cartApi.addToCart(updatedProduct);
            }
        } catch (error) {
            console.error('Ошибка увеличения количества:', error);
        }
    };
};

export const minusCountProductThunk = (id: number, selectedType: number, selectedSize: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        try {
            const state = getState();
            const currentProduct = state.CartReducer.productsCart.find(
                (item: CartItemType) =>
                    item.id === id &&
                    item.selectedType === selectedType &&
                    item.selectedSize === selectedSize,
            );

            // Если товара нет или количество 1 - удаляем его
            if (!currentProduct || currentProduct.productCount === 1) {
                await cartApi.removeCartProduct(id);
                dispatch(removeCartProduct(id));
            } else {
                // Уменьшаем количество
                dispatch(minusCountProduct(id, selectedType, selectedSize));

                // Получаем обновленный товар
                const updatedProduct = getState().CartReducer.productsCart.find(
                    (item: CartItemType) =>
                        item.id === id &&
                        item.selectedType === selectedType &&
                        item.selectedSize === selectedSize,
                );

                // Обновляем на сервере
                if (updatedProduct) {
                    await cartApi.removeCartProduct(id);
                    await cartApi.addToCart(updatedProduct);
                }
            }
        } catch (error) {
            console.error('Ошибка уменьшения количества:', error);
        }
    };
};
