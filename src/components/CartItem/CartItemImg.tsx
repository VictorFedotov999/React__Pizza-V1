import { CartItemLogicPropsType } from '../../ts/types/commonTypes/commonPropsType';

const CartItemImg = (props: CartItemLogicPropsType) => {
    return (
        <>
            <div className='cart__item-img'>
                <img className='pizza-block__image' src={props.cartItem.imageUrl} alt='Pizza' />
            </div>
        </>
    );
};

export default CartItemImg;
