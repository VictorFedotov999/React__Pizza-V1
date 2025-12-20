const CartItemInfo = ({ cartItem }) => {
    return (
        <>
            <div className='cart__item-info'>
                <h3>{cartItem.productTitle}</h3>
                <p>
                    {cartItem.typeName} тесто, {cartItem.selectedSize} см.
                </p>
            </div>
        </>
    );
};

export default CartItemInfo;
