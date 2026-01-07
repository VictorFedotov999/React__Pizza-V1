import CartItem from '../CartItem/CartItem';
import { CartsItemsPropsType } from '../../ts/types/commonTypes/commonPropsType';

const CartsItems = (props: CartsItemsPropsType) => {
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
