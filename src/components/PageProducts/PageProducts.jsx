import Categories from '../Categories/Categories';
import TitleProducts from '../TitleProducts/TitleProducts';
import ItemsProducts from '../ItemsProducts/ItemsProducts';
import Preloader from '../../Preloader/Preloader';
const PageProducts = (props) => {
    return (
        <>
            <div className='content'>
                <div className='container'>
                    <Categories
                        categories={props.categories} //true
                        ActiveCategoryIndex={props.ActiveCategoryIndex} //true
                        ActivePagination={props.ActivePagination} //true
                        sortPopupType={props.sortPopupType}
                        ActiveSortPopupIndex={props.ActiveSortPopupIndex}
                        OpenSortPopup={props.OpenSortPopup}
                        activeSortPopup={props.activeSortPopup}
                    />
                    <TitleProducts categories={props.categories} />
                    <ItemsProducts
                        products={props.products} //ture
                        UpdateProductInfo={props.UpdateProductInfo} //true
                        productInfo={props.productInfo} //true
                        AddProductCart={props.AddProductCart} // true
                    />
                </div>
            </div>
        </>
    );
};

export default PageProducts;
