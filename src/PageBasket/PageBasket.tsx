import TitleBasket from '../components/TitleBasket/TitleBasket';
import CartClear from '../components/CartClear/CartClear';
import CartsItems from '../components/CartsItems/CartsItems';
import AboutOrder from '../components/AboutOrder/AboutOrder';
import BasketEmpty from '../components/BasketEmpy';
import { CartItemType } from '../ts/types/basketType';

type PropsType = {
    productsCart: CartItemType[];
    totalPizzasCount: number;
    totalPrice: number;
    removeCartThunk: () => void;
    removeCartProductThunk: (key: string) => void;
    plusCountProductThunk: (key: string) => void;
    minusCountProductThunk: (key: string) => void;
};

const PageBasket = (props: PropsType) => {
    if (props.productsCart.length === 0) {
        return <BasketEmpty />;
    }

    return (
        <div className='content'>
            <div className='container container--cart'>
                <div className='cart'>
                    <div className='cart__top'>
                        <TitleBasket />
                        <CartClear removeCartThunk={props.removeCartThunk} />
                    </div>

                    <CartsItems
                        productsCart={props.productsCart}
                        removeCartProductThunk={props.removeCartProductThunk}
                        plusCountProductThunk={props.plusCountProductThunk}
                        minusCountProductThunk={props.minusCountProductThunk}
                    />
                    <AboutOrder
                        totalPizzasCount={props.totalPizzasCount}
                        totalPrice={props.totalPrice}
                    />
                </div>
            </div>
        </div>
    );
};

export default PageBasket;
