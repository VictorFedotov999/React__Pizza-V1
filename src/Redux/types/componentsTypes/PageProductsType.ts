import { ProductType } from '../productsType';
import { CartItemType } from '../basketType';
import { ProductInfoItem } from './productsContainerType';

export interface PageProductsPropsType {
    //Props
    products: ProductType[];
    categories: string[];
    ActiveCategoryIndex: number;
    productInfo: ProductInfoItem[];

    sortPopupType: string[];
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;
    //Function
    ActivePagination: (index: number) => void;
    UpdateProductInfo: (productId: string, selectedType: number, selectedSize: number) => void;
    AddProductCart: (productDate: CartItemType) => void;
    activeSortPopup: (ActiveSortPopupIndex: number, OpenSortPopup: boolean) => void;
}
