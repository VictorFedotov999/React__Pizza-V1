const CartItemImg = ({ cartItem }) => {
    return (
        <>
            <div className='cart__item-img'>
                <img className='pizza-block__image' src={cartItem.imageUrl} alt='Pizza' />
            </div>
        </>
    );
};

export default CartItemImg;
