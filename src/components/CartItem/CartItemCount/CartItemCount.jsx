import CartItemButtonMinus from './CartItemButtonMinus';
import CartItemButtonPlus from './CartItemButtonPlus';

const CartItemCount = ({ cartItem, plusCountProductThunk, minusCountProductThunk }) => {
    const handlePlus = () => {
        plusCountProductThunk(cartItem.id, cartItem.selectedType, cartItem.selectedSize);
    };

    const handleMinus = () => {
        minusCountProductThunk(cartItem.id, cartItem.selectedType, cartItem.selectedSize);
    };
    return (
        <>
            <div className='cart__item-count'>
                <div onClick={handleMinus}>
                    <CartItemButtonMinus />
                </div>

                <b>{cartItem.productCount}</b>
                <div onClick={handlePlus}>
                    <CartItemButtonPlus />
                </div>
            </div>
        </>
    );
};

export default CartItemCount;
