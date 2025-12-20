import CartItemImg from './CartItemImg';
import CartItemInfo from './CartItemInfo';
import CartItemPrice from './CartItemPrice';
import CartItemCount from './CartItemCount/CartItemCount';
import CartItemRemove from './CartItemRemove';
const CartItem = (props) => {
    const { cartItem } = props;

    const ClickDeleteProuduct = () => {
        props.removeCartProductThunk(cartItem.id);
    };

    return (
        <>
            <div className='cart__item'>
                <CartItemImg cartItem={cartItem} />
                <CartItemInfo cartItem={cartItem} />
                <CartItemCount cartItem={cartItem} />
                <CartItemPrice cartItem={cartItem} />
                <CartItemRemove ClickDeleteProuduct={ClickDeleteProuduct} />
            </div>
        </>
    );
};

export default CartItem;
