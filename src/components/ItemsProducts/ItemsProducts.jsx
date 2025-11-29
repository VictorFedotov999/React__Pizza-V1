import ItemProduct from '../ItemProduct/ItemProduct';

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
                        productsCart={props.productsCart}
                    />
                ))}
            </div>
        </>
    );
};

export default ItemsProducts;
