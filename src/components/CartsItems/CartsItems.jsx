import CartItem from '../CartItem/CartItem';

const CartsItems = (props) => {
    return (
        <div className='content__items'>
            {props.productsCart.map((p) => (
                <CartItem
                    key={p.id}
                    cartItem={p}
                    removeCartProductThunk={props.removeCartProductThunk}
                    plusCountProductThunk={props.plusCountProductThunk}
                    minusCountProductThunk={props.minusCountProductThunk}
                    totalPizzasCount={props.totalPizzasCount}
                    totalPrice={props.totalPrice}
                />
            ))}
        </div>
    );
};

export default CartsItems;
