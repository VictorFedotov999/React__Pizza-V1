import CartClearSvg from './CartClearSvg';

const CartClear = (props) => {
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
