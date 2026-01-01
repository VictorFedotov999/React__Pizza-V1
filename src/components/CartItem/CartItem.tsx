import CartItemImg from './CartItemImg.tsx';
import CartItemInfo from './CartItemInfo.tsx';
import CartItemPrice from './CartItemPrice.tsx';
import CartItemCount from './CartItemCount/CartItemCount';
import CartItemRemove from './CartItemRemove';
import { CartItemType } from '../../Redux/types/basketType';

type PropsType = {
    cartItem: CartItemType;
    onDelete: () => void;
    onPlus: () => void;
    onMinus: () => void;
};

const CartItem = (props: PropsType) => {
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
