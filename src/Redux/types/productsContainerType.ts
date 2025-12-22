import { ProductType } from './productsType';
import { CartItemType } from './componentsTypes/basketType';

export type MapStateToPropsType = {
    products: ProductType[];
    categories: string[];
    ActiveCategoryIndex: number;

    productInfo: Record<
        string,
        {
            productType: number;
            productSize: number;
        }
    >;
    sortPopupType: string[];
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;
};

export type MapDispatchPropsType = {
    SetProducts: (products: ProductType[]) => void;
    ActivePagination: (index: number) => void;
    UpdateProductInfo: (productId: string, selectedType: number, selectedSize: number) => void;
    AddProductCart: (productDate: CartItemType) => void;
    getPizzas: () => void;
    activeSortPopup: (ActiveSortPopupIndex: number, OpenSortPopup: boolean) => void;
};

export type PropsType = MapStateToPropsType & MapDispatchPropsType;
