import CartOrderDetails from './CartOrderDetails/CartOrderDetails';
import CartOrderButtons from './CartOrderButtons/CartOrderButtons';

type PropsType = {
    totalPizzasCount: number;
    totalPrice: number;
};

const AboutOrder = (props: PropsType) => {
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
