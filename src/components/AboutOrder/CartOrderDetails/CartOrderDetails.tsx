import { CountLogicPropsType } from '../../../ts/types/commonTypes/commonPropsType';

const CartOrderDetails = (props: CountLogicPropsType) => {
    return (
        <>
            <div className='cart__bottom-details'>
                <span>
                    Всего пицц: <b>{props.totalPizzasCount} шт.</b>
                </span>

                <span>
                    Сумма заказа: <b>{props.totalPrice}₽</b>
                </span>
            </div>
        </>
    );
};

export default CartOrderDetails;
