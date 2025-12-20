import CartItemButtonMinus from './CartItemButtonMinus';
import CartItemButtonPlus from './CartItemButtonPlus';

const CartItemCount = ({ cartItem }) => {
    return (
        <>
            <div className='cart__item-count'>
                <CartItemButtonMinus />
                <b>{cartItem.productCount}</b>
                <CartItemButtonPlus />
            </div>
        </>
    );
};

export default CartItemCount;
