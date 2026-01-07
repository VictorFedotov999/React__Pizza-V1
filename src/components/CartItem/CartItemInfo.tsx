import { CartItemLogicPropsType } from '../../ts/types/commonTypes/commonPropsType';

const CartItemInfo = (props: CartItemLogicPropsType) => {
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
