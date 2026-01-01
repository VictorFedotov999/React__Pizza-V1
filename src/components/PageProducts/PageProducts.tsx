import Categories from '../Categories/Categories';
import TitleProducts from '../TitleProducts/TitleProducts';
import ItemsProducts from '../ItemsProducts/ItemsProducts';
import {
    CategoriesType,
    ProductInfoStateType,
    ProductType,
    SortPopupType,
} from '../../Redux/types/productsType';
import { CartItemType } from '../../Redux/types/basketType';

type PropsType = {
    products: ProductType[];
    categories: CategoriesType;
    sortPopup: SortPopupType;
    productInfo: ProductInfoStateType;
    ActivePagination: (index: number) => void;
    UpdateProductInfo: (productId: number, selectedType: number, selectedSize: number) => void;
    AddProductCart: (productDate: CartItemType) => void;
    activeSortPopup: (ActiveSortPopupIndex: number, OpenSortPopup: boolean) => void;
};

const PageProducts = (props: PropsType) => {
    return (
        <>
            <div className='content'>
                <div className='container'>
                    <Categories
                        categories={props.categories}
                        sortPopup={props.sortPopup}
                        ActivePagination={props.ActivePagination}
                        activeSortPopup={props.activeSortPopup}
                    />
                    <TitleProducts categories={props.categories} />
                    <ItemsProducts
                        products={props.products}
                        productInfo={props.productInfo}
                        UpdateProductInfo={props.UpdateProductInfo}
                        AddProductCart={props.AddProductCart}
                    />
                </div>
            </div>
        </>
    );
};

export default PageProducts;
