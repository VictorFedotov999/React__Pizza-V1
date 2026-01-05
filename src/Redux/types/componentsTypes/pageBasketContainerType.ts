import { CartItemType } from '../basketType';

export type MapStateToPropsType = {
    productsCart: CartItemType[];
    totalPizzasCount: number;
    totalPrice: number;
};

export type MapDispatchPropsType = {
    getProductCart: () => void;
    removeCartThunk: () => void;
    removeCartProductThunk: (id: string, selectedSize: number, selectedType: number) => void;
    plusCountProductThunk: (id: string, selectedSize: number, selectedType: number) => void;
    minusCountProductThunk: (id: string, selectedSize: number, selectedType: number) => void;
};

export type PropsType = MapStateToPropsType & MapDispatchPropsType;
