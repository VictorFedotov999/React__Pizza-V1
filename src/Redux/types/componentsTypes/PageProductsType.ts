import { ProductType } from '../productsType';
import { CartItemType } from '../basketType';

export interface PageProductsPropsType {
    //Props
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
    //Function
    ActivePagination: (index: number) => void;
    UpdateProductInfo: (productId: string, selectedType: number, selectedSize: number) => void;
    AddProductCart: (productDate: CartItemType) => void;
    activeSortPopup: (ActiveSortPopupIndex: number, OpenSortPopup: boolean) => void;
}
