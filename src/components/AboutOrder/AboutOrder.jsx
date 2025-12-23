import CartOrderDetails from './CartOrderDetails/CartOrderDetails';
import CartOrderButtons from './CartOrderButtons/CartOrderButtons';
const AboutOrder = (props) => {
    return (
        <>
            <div className='cart__bottom'>
                <CartOrderDetails
                    totalPizzasCount={props.totalPizzasCount}
                    totalPrice={props.totalPrice}
                />
                <CartOrderButtons />
            </div>
        </>
    );
};

export default AboutOrder;
