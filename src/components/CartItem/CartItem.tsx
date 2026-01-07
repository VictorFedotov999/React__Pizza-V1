import CartItemImg from './CartItemImg.tsx';
import CartItemInfo from './CartItemInfo.tsx';
import CartItemPrice from './CartItemPrice.tsx';
import CartItemCount from './CartItemCount/CartItemCount';
import CartItemRemove from './CartItemRemove';
import { CartItemPropsType } from '../../ts/types/commonTypes/commonPropsType.ts';

const CartItem = (props: CartItemPropsType) => {
    return (
        <div className='cart__item'>
            <CartItemImg cartItem={props.cartItem} />
            <CartItemInfo cartItem={props.cartItem} />
            <CartItemCount
                count={props.cartItem.productCount}
                onPlus={props.onPlus}
                onMinus={props.onMinus}
            />
            <CartItemPrice cartItem={props.cartItem} />
            <CartItemRemove onClick={props.onDelete} />
        </div>
    );
};

export default CartItem;
