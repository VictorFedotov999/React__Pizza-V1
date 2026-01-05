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

// export const addToCart = (product: CartItemType) => {
//     return async (dispatch: DispatchType, getState: GetStateType) => {
//         const existingItem = getState().CartReducer.productsCart.find(
//             (i) =>
//                 i.id === product.id &&
//                 i.selectedSize === product.selectedSize &&
//                 i.selectedType === product.selectedType,
//         );

//         if (existingItem) {
//             dispatch(plusCountProduct(product.id, product.selectedSize, product.selectedType));

//             const updatedItem = {
//                 ...existingItem,
//                 productCount: existingItem.productCount + 1,
//             };

//             await cartApi.updateCartItem(product.id, updatedItem);
//         } else {
//             const newItem = { ...product, productCount: 1 };

//             dispatch(AddProductCart(newItem));
//             await cartApi.addToCart(newItem);
//         }
//     };
// };

export const addToCart = (product: CartItemType) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        const existingItem = getState().CartReducer.productsCart.find(
            (i) =>
                i.id === product.id &&
                i.selectedSize === product.selectedSize &&
                i.selectedType === product.selectedType,
        );

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                productCount: existingItem.productCount + 1,
            };

            dispatch(
                SetProductsCart(
                    getState().CartReducer.productsCart.map((item) =>
                        item.id === updatedItem.id &&
                        item.selectedSize === updatedItem.selectedSize &&
                        item.selectedType === updatedItem.selectedType
                            ? updatedItem
                            : item,
                    ),
                ),
            );

            await cartApi.updateCartItem(updatedItem.id, updatedItem);
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

export const removeCartProductThunk = (id: string, selectedSize: number, selectedType: number) => {
    return (dispatch: DispatchType) => {
        cartApi
            .removeCartProduct(id)
            .then(() => {
                dispatch(removeCartProduct(id, selectedSize, selectedType));
            })
            .catch((error) => {
                console.error('Ошибка удаления товара:', error);
            });
    };
};

export const plusCountProductThunk = (id: string, selectedSize: number, selectedType: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        const item = getState().CartReducer.productsCart.find(
            (i) =>
                i.id === id && i.selectedSize === selectedSize && i.selectedType === selectedType,
        );

        if (!item) return;

        const updatedItem = { ...item, productCount: item.productCount + 1 };

        dispatch(
            SetProductsCart(
                getState().CartReducer.productsCart.map((i) =>
                    i.id === id &&
                    i.selectedSize === selectedSize &&
                    i.selectedType === selectedType
                        ? updatedItem
                        : i,
                ),
            ),
        );

        await cartApi.updateCartItem(id, updatedItem);
    };
};

export const minusCountProductThunk = (id: string, selectedSize: number, selectedType: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        const item = getState().CartReducer.productsCart.find(
            (i) =>
                i.id === id && i.selectedSize === selectedSize && i.selectedType === selectedType,
        );

        if (!item) return;

        if (item.productCount === 1) {
            await cartApi.removeCartProduct(id);
            dispatch(removeCartProduct(id, selectedSize, selectedType));
        } else {
            dispatch(minusCountProduct(id, selectedSize, selectedType));

            const updatedItem = {
                ...item,
                productCount: item.productCount - 1,
            };

            await cartApi.updateCartItem(id, updatedItem);
        }
    };
};
