import { CartItemType } from '../basketType';

export type MapStateToPropsType = {
    productsCart: CartItemType[];
    totalPizzasCount: number;
    totalPrice: number;
};

export type MapDispatchPropsType = {
    getProductCart: () => void;
    removeCartThunk: () => void;
    removeCartProductThunk: (productId: number) => void;
    plusCountProductThunk: (id: number, selectedType: number, selectedSize: number) => void;
    minusCountProductThunk: (id: number, selectedType: number, selectedSize: number) => void;
};

export type PropsType = MapStateToPropsType & MapDispatchPropsType;
