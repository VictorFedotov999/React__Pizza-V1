import ButtonExit from './ButtonExit';
import ButtonPay from './ButtonPay';

type PropsType = {};

const CartOrderButtons = (props: PropsType) => {
    return (
        <>
            <div className='cart__bottom-buttons'>
                <ButtonExit />
                <ButtonPay />
            </div>
        </>
    );
};

export default CartOrderButtons;
