import { CartItemType } from '../../Redux/types/basketType';

type PropsType = {
    cartItem: CartItemType;
};

const CartItemPrice = (props: PropsType) => {
    return (
        <>
            <div className='cart__item-price'>
                <b>{props.cartItem.price * props.cartItem.productCount} ₽</b>
            </div>
        </>
    );
};

export default CartItemPrice;
