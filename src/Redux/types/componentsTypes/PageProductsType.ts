import { ProductType } from '../productsType';
import { CartItemType } from '../basketType';
import { ProductInfoStateType } from '../productsType';
export interface PageProductsPropsType {
    //Props
    products: ProductType[];
    categories: string[];
    ActiveCategoryIndex: number;
    productInfo: ProductInfoStateType;
    sortPopupType: string[];
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;
    //Function
    ActivePagination: (index: number) => void;
    UpdateProductInfo: (id: string, selectedType: number, selectedSize: number) => void;
    AddProductCart: (productDate: CartItemType) => void;
    activeSortPopup: (ActiveSortPopupIndex: number, OpenSortPopup: boolean) => void;
}
