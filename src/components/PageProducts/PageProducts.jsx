import Categories from '../Categories/Categories';
import TitleProducts from '../TitleProducts/TitleProducts';
import ItemsProducts from '../ItemsProducts/ItemsProducts';

const PageProducts = (props) => {
    return (
        <>
            <div className='content'>
                <div className='container'>
                    <Categories
                        categories={props.categories}
                        ActiveCategoryIndex={props.ActiveCategoryIndex}
                        ActivePagination={props.ActivePagination}
                        sortPopupType={props.sortPopupType}
                        ActiveSortPopupIndex={props.ActiveSortPopupIndex}
                        OpenSortPopup={props.OpenSortPopup}
                        activeSortPopup={props.activeSortPopup}
                    />
                    <TitleProducts categories={props.categories} />
                    <ItemsProducts
                        products={props.products}
                        UpdateProductInfo={props.UpdateProductInfo}
                        productInfo={props.productInfo}
                        AddProductCart={props.AddProductCart}
                    />
                </div>
            </div>
        </>
    );
};

export default PageProducts;
