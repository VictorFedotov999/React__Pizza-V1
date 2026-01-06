import ItemProduct from '../ItemProduct/ItemProduct';
import AddProducts from './AddProducts';

import { ProductType, ProductInfoStateType } from '../../Redux/types/productsType';
import { CartItemType } from '../../Redux/types/basketType';

type PropsType = {
    products: ProductType[];
    productInfo: ProductInfoStateType;
    UpdateProductInfo: (id: string, selectedType: number, selectedSize: number) => void;
    AddProductCart: (productDate: CartItemType) => void;
    productsCart: CartItemType[];
};

const ItemsProducts = (props: PropsType) => {
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

            <AddProducts />
        </>
    );
};

export default ItemsProducts;
