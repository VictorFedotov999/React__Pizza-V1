import ItemProductButton from './ItemProductButton/ItemProductButton';

const ItemProduct = (props) => {
    const currentProduct = props.productInfo[props.product.id] || {
        productType: 0,
        productSize: 0,
    };

    const typeName =
        props.product.types[currentProduct.productType] === 0 ? 'тонкое' : 'традиционное';

    const onChangeType = (typeIndex) => {
        props.UpdateProductInfo(props.product.id, typeIndex, currentProduct.productSize);
    };

    const onChangeSize = (sizeIndex) => {
        props.UpdateProductInfo(props.product.id, currentProduct.productType, sizeIndex);
    };
    const OnClickAddProductCart = () => {
        const productData = {
            id: props.product.id,
            productTitle: props.product.name,
            imageUrl: props.product.imageUrl,
            price: props.product.price,
            selectedType: props.product.types[currentProduct.productType],
            selectedSize: props.product.sizes[currentProduct.productSize],
            typeName: typeName,
            productCount: 1,
        };
        props.AddProductCart(productData);
    };

    return (
        <>
            <div className='pizza-block'>
                <img className='pizza-block__image' src={props.product.imageUrl} alt='Pizza' />
                <h4 className='pizza-block__title'>{props.product.name}</h4>
                <div className='pizza-block__selector'>
                    <ul>
                        {props.product.types.map((type, index) => (
                            <li
                                key={type}
                                className={currentProduct.productType === index ? 'active' : ''}
                                onClick={() => onChangeType(index)}
                            >
                                {type === 0 ? 'тонкое' : 'традиционное'}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {props.product.sizes.map((size, index) => (
                            <li
                                key={size}
                                className={currentProduct.productSize === index ? 'active' : ''}
                                onClick={() => onChangeSize(index)}
                            >
                                {size === 0 ? 'active' : ''}
                                {size} см.
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='pizza-block__bottom'>
                    <div className='pizza-block__price'>{props.product.price} Руб</div>

                    <ItemProductButton OnClickAddProductCart={OnClickAddProductCart} />
                </div>
            </div>
        </>
    );
};

export default ItemProduct;
