import ItemProduct from '../ItemProduct/ItemProduct';
import AddProducts from './AddProducts';

const ItemsProducts = (props) => {
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
                    />
                ))}
            </div>

            <AddProducts />
        </>
    );
};

export default ItemsProducts;
