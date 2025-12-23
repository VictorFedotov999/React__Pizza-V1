import CartItemImg from './CartItemImg';
import CartItemInfo from './CartItemInfo';
import CartItemPrice from './CartItemPrice';
import CartItemCount from './CartItemCount/CartItemCount';
import CartItemRemove from './CartItemRemove';

const CartItem = (props) => {
    const { cartItem, removeCartProductThunk, plusCountProductThunk, minusCountProductThunk } =
        props;

    const handleDeleteProduct = () => {
        removeCartProductThunk(cartItem.id);
    };

    return (
        <div className='cart__item'>
            <CartItemImg cartItem={cartItem} />
            <CartItemInfo cartItem={cartItem} />
            <CartItemCount
                cartItem={cartItem}
                plusCountProductThunk={plusCountProductThunk}
                minusCountProductThunk={minusCountProductThunk} // ПЕРЕДАЕМ ДАЛЬШЕ
            />
            <CartItemPrice cartItem={cartItem} />
            <CartItemRemove ClickDeleteProuduct={handleDeleteProduct} />
        </div>
    );
};

export default CartItem;
