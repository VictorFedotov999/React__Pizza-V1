import CartItem from '../CartItem/CartItem';
import { CartItemType } from '../../Redux/types/basketType';

type PropsType = {
    productsCart: CartItemType[];
    removeCartProductThunk: (id: string, selectedSize: number, selectedType: number) => void;
    plusCountProductThunk: (id: string, selectedSize: number, selectedType: number) => void;
    minusCountProductThunk: (id: string, selectedSize: number, selectedType: number) => void;
};

const CartsItems = (props: PropsType) => {
    return (
        <div className='content__items'>
            {props.productsCart.map((p) => (
                <CartItem
                    key={p.id}
                    cartItem={p}
                    onDelete={() =>
                        props.removeCartProductThunk(p.id, p.selectedSize, p.selectedType)
                    }
                    onPlus={() => props.plusCountProductThunk(p.id, p.selectedSize, p.selectedType)}
                    onMinus={() =>
                        props.minusCountProductThunk(p.id, p.selectedSize, p.selectedType)
                    }
                />
            ))}
        </div>
    );
};

export default CartsItems;
