import { CartItemType } from '../../../Redux/types/basketType';
import ItemProductButtonSvg from './ItemProductButtonSvg';

type PropsType = {
    OnClickAddProductCart: () => void;
    productsCart: CartItemType[];
    productKey: string;
};

const ItemProductButton = (props: PropsType) => {
    const count =
        props.productsCart.find((item) => item.key === props.productKey)?.productCount || 0;
    return (
        <>
            <div
                className='button button--outline button--add'
                onClick={props.OnClickAddProductCart}
            >
                <ItemProductButtonSvg />
                <span>Добавить</span>

                <i>{count}</i>
            </div>
        </>
    );
};

export default ItemProductButton;
