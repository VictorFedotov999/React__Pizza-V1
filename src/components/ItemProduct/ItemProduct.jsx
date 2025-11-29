const ItemProduct = (props) => {
    const currentProduct = props.productInfo[props.product.id] || {
        productType: 0,
        productSize: 0,
    };
    const getCurrentPizzaQuantity = () => {
        if (!props.productsCart) return 0;

        const foundItem = props.productsCart.find(
            (item) =>
                item.id === props.product.id &&
                item.selectedType === props.product.types[currentProduct.productType] &&
                item.selectedSize === props.product.sizes[currentProduct.productSize],
        );

        return foundItem ? foundItem.quantity : 0;
    };
    const onChangeType = (typeIndex) => {
        props.UpdateProductInfo(props.product.id, typeIndex, currentProduct.productSize);
    };
    const onChangeSize = (sizeIndex) => {
        props.UpdateProductInfo(props.product.id, currentProduct.productType, sizeIndex);
    };

    const OnClickAddProductCart = () => {
        const productData = {
            id: props.product.id,
            name: props.product.name,
            imageUrl: props.product.imageUrl,
            price: props.product.price,
            selectedType: props.product.types[currentProduct.productType],
            selectedSize: props.product.sizes[currentProduct.productSize],
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
                    <div
                        className='button button--outline button--add'
                        onClick={OnClickAddProductCart}
                    >
                        <svg
                            width='12'
                            height='12'
                            viewBox='0 0 12 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                                fill='white'
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>{getCurrentPizzaQuantity()}</i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemProduct;
