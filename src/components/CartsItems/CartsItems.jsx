import CartItem from '../CartItem/CartItem';

const CartsItems = (props) => {
    return (
        <>
            <div className='content__items'>
                {props.productsCart.map((p) => (
                    <CartItem
                        key={p.id}
                        cartItem={p}
                        removeCartProductThunk={props.removeCartProductThunk}
                        productsCart={props.productsCart}
                    />
                ))}
            </div>
        </>
    );
};

export default CartsItems;
