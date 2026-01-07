import ItemProduct from '../ItemProduct/ItemProduct';
import { ItemsProductsPropsType } from '../../ts/types/commonTypes/commonPropsType';

const ItemsProducts = (props: ItemsProductsPropsType) => {
    return (
        <>
            <div className='content__items'>
                {props.products.map((p) => (
                    <ItemProduct
                        key={p.id}
                        product={p}
                        UpdateProductInfo={props.UpdateProductInfo}
                        productInfo={props.productInfo}
                        AddProductCart={props.AddProductCart}
                        productsCart={props.productsCart}
                    />
                ))}
            </div>

            {/* <AddProducts /> */}
        </>
    );
};

export default ItemsProducts;
