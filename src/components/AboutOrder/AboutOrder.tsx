import CartOrderDetails from './CartOrderDetails/CartOrderDetails';
import CartOrderButtons from './CartOrderButtons/CartOrderButtons';
import { CountLogicPropsType } from '../../ts/types/commonTypes/commonPropsType';

const AboutOrder = (props: CountLogicPropsType) => {
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
