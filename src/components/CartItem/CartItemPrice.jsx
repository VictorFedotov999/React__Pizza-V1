const CartItemPrice = ({ cartItem }) => {
    return (
        <>
            <div className='cart__item-price'>
                <b>{cartItem.price * cartItem.productCount} ₽</b>
            </div>
        </>
    );
};

export default CartItemPrice;
