import CartItem from '../CartItem/CartItem';
import { CartItemType } from '../../Redux/types/basketType';

type PropsType = {
    productsCart: CartItemType[];
    removeCartProductThunk: (productId: number) => void;
    plusCountProductThunk: (id: number, selectedType: number, selectedSize: number) => void;
    minusCountProductThunk: (id: number, selectedType: number, selectedSize: number) => void;
};

const CartsItems = (props: PropsType) => {
    return (
        <div className='content__items'>
            {props.productsCart.map((p) => (
                <CartItem
                    key={p.id}
                    cartItem={p}
                    onDelete={() => props.removeCartProductThunk(p.id)}
                    onPlus={() => props.plusCountProductThunk(p.id, p.selectedType, p.selectedSize)}
                    onMinus={() =>
                        props.minusCountProductThunk(p.id, p.selectedType, p.selectedSize)
                    }
                />
            ))}
        </div>
    );
};

export default CartsItems;
