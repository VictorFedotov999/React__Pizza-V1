import ItemProduct from '../ItemProduct/ItemProduct';

const ItemsProducts = (props) => {
    return (
        <>
            <div className='content__items'>
                {props.products.map((p) => (
                    <ItemProduct
                        key={p.id}
                        product={p} //true
                        UpdateProductInfo={props.UpdateProductInfo} //true
                        productInfo={props.productInfo} //true
                        AddProductCart={props.AddProductCart} //true
                    />
                ))}
            </div>
            <div className='add-buton'>
                <button className='add-button'>Добавить</button>
            </div>
        </>
    );
};

export default ItemsProducts;
