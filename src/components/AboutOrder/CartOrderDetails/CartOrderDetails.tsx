type PropsType = {
    totalPizzasCount: number;
    totalPrice: number;
};

const CartOrderDetails = (props: PropsType) => {
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
