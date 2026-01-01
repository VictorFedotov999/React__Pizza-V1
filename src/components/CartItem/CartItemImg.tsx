import { CartItemType } from '../../Redux/types/basketType';

type PropsType = {
    cartItem: CartItemType;
};

const CartItemImg = (props: PropsType) => {
    return (
        <>
            <div className='cart__item-img'>
                <img className='pizza-block__image' src={props.cartItem.imageUrl} alt='Pizza' />
            </div>
        </>
    );
};

export default CartItemImg;
