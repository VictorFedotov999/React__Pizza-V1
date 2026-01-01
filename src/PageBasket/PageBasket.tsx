import TitleBasket from '../components/TitleBasket/TitleBasket';
import CartClear from '../components/CartClear/CartClear';
import CartsItems from '../components/CartsItems/CartsItems';
import AboutOrder from '../components/AboutOrder/AboutOrder';
import { CartItemType } from '../Redux/types/basketType';

type PropsType = {
    productsCart: CartItemType[];
    totalPizzasCount: number;
    totalPrice: number;
    removeCartThunk: () => void;
    removeCartProductThunk: (productId: number) => void;
    plusCountProductThunk: (id: number, selectedType: number, selectedSize: number) => void;
    minusCountProductThunk: (id: number, selectedType: number, selectedSize: number) => void;
};

const PageBasket = (props: PropsType) => {
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
