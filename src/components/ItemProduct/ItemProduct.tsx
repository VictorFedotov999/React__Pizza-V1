import ItemProductButton from './ItemProductButton/ItemProductButton';
import { CartItemType } from '../../ts/types/basketType';
import { CreateKeyProductCart } from '../../Redux/thunks/basketThunks';

import { ItemProductPropsType } from '../../ts/types/commonTypes/commonPropsType';

const ItemProduct = (props: ItemProductPropsType) => {
    const currentProduct = props.productInfo[props.product.id] || {
        selectedType: 0,
        selectedSize: 0,
    };

    const typeName = currentProduct.selectedType === 0 ? 'тонкое' : 'традиционное';

    const onChangeType = (typeIndex: number) => {
        props.UpdateProductInfo(props.product.id, typeIndex, currentProduct.selectedSize);
    };

    const onChangeSize = (sizeIndex: number) => {
        props.UpdateProductInfo(props.product.id, currentProduct.selectedType, sizeIndex);
    };
    const OnClickAddProductCart = () => {
        const key = CreateKeyProductCart(
            props.product.id,
            props.product.sizes[currentProduct.selectedSize],
            currentProduct.selectedType,
        );

        const productData: CartItemType = {
            key,
            id: props.product.id,
            productTitle: props.product.name,
            imageUrl: props.product.imageUrl,
            price: props.product.price,
            selectedType: currentProduct.selectedType,
            selectedSize: props.product.sizes[currentProduct.selectedSize],
            typeName,
            productCount: 1,
        };

        props.AddProductCart(productData);
    };

    const productKey = CreateKeyProductCart(
        props.product.id,
        props.product.sizes[currentProduct.selectedSize],
        currentProduct.selectedType,
    );

    return (
        <>
            <div className='pizza-block'>
                <img className='pizza-block__image' src={props.product.imageUrl} alt='Pizza' />
                <h4 className='pizza-block__title'>{props.product.name}</h4>
                <div className='pizza-block__selector'>
                    <ul>
                        {props.product.types.map((type: number, index: number) => (
                            <li
                                key={type}
                                className={currentProduct.selectedType === index ? 'active' : ''}
                                onClick={() => onChangeType(index)}
                            >
                                {type === 0 ? 'тонкое' : 'традиционное'}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {props.product.sizes.map((size: number, index: number) => (
                            <li
                                key={size}
                                className={currentProduct.selectedSize === index ? 'active' : ''}
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

                    <ItemProductButton
                        OnClickAddProductCart={OnClickAddProductCart}
                        productKey={productKey}
                        productsCart={props.productsCart}
                    />
                </div>
            </div>
        </>
    );
};

export default ItemProduct;
