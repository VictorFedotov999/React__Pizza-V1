import CartItem from '../CartItem/CartItem';
import { CartItemType } from '../../Redux/types/basketType';

type PropsType = {
    productsCart: CartItemType[];
    removeCartProductThunk: (key: string) => void;
    plusCountProductThunk: (key: string) => void;
    minusCountProductThunk: (key: string) => void;
};

const CartsItems = (props: PropsType) => {
    return (
        <div className='content__items'>
            {props.productsCart.map((p) => (
                <CartItem
                    key={p.id}
                    cartItem={p}
                    onDelete={() => props.removeCartProductThunk(p.key)}
                    onPlus={() => props.plusCountProductThunk(p.key)}
                    onMinus={() => props.minusCountProductThunk(p.key)}
                />
            ))}
        </div>
    );
};

export default CartsItems;
