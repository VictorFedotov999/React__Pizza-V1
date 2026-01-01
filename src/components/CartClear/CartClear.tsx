import CartClearSvg from './CartClearSvg';

type PropsType = {
    removeCartThunk: () => void;
};

const CartClear = (props: PropsType) => {
    const handleClearCart = () => {
        props.removeCartThunk();
    };

    return (
        <>
            <div className='cart__clear'>
                <CartClearSvg />
                <span onClick={handleClearCart}>Очистить корзину</span>
            </div>
        </>
    );
};

export default CartClear;
