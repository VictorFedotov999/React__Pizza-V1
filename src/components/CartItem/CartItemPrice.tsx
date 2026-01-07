import { CartItemLogicPropsType } from '../../ts/types/commonTypes/commonPropsType';

const CartItemPrice = (props: CartItemLogicPropsType) => {
    return (
        <>
            <div className='cart__item-price'>
                <b>{props.cartItem.price * props.cartItem.productCount} ₽</b>
            </div>
        </>
    );
};

export default CartItemPrice;
