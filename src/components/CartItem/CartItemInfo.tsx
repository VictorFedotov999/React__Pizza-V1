import { CartItemType } from '../../Redux/types/basketType';

type PropsType = {
    cartItem: CartItemType;
};

const CartItemInfo = (props: PropsType) => {
    return (
        <>
            <div className='cart__item-info'>
                <h3>{props.cartItem.productTitle}</h3>
                <p>
                    {props.cartItem.typeName} тесто, {props.cartItem.selectedSize} см.
                </p>
            </div>
        </>
    );
};

export default CartItemInfo;
