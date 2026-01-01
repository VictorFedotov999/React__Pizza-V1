import CartItemButtonMinus from './CartItemButtonMinus';
import CartItemButtonPlus from './CartItemButtonPlus';

type PropsType = {
    count: number;
    onPlus: () => void;
    onMinus: () => void;
};

const CartItemCount = (props: PropsType) => {
    return (
        <div className='cart__item-count'>
            <div onClick={props.onMinus}>
                <CartItemButtonMinus />
            </div>
            <b>{props.count}</b>
            <div onClick={props.onPlus}>
                <CartItemButtonPlus />
            </div>
        </div>
    );
};

export default CartItemCount;
