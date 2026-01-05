import CartItemRemoveSvg from './CartItemCount/CartItemRemoveSvg';

type PropsType = {
    onClick: () => void;
};

const CartItemRemove = (props: PropsType) => {
    return (
        <div className='cart__item-remove'>
            <div className='button button--outline button--circle' onClick={props.onClick}>
                <CartItemRemoveSvg />
            </div>
        </div>
    );
};

export default CartItemRemove;
