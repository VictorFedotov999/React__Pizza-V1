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
                    />
                    <TitleProducts />
                    <ItemsProducts
                        products={props.products}
                        UpdateProductInfo={props.UpdateProductInfo}
                        productInfo={props.productInfo}
                        AddProductCart={props.AddProductCart}
                        productsCart={props.productsCart}
                    />
                </div>
            </div>
        </>
    );
};

export default PageProducts;
