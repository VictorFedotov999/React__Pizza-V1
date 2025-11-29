import CartItem from '../CartItem/CartItem';

const CartsItems = (props) => {
    return (
        <>
            <div className='content__items'>
                {props.productsCart.map((p) => (
                    <CartItem key={p.id} cartItem={p} />
                ))}
            </div>
        </>
    );
};

export default CartsItems;
