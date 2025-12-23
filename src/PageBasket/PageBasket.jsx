import TitleBasket from '../components/TitleBasket/TitleBasket';
import CartClear from '../components/CartClear/CartClear';
import CartsItems from '../components/CartsItems/CartsItems';
import AboutOrder from '../components/AboutOrder/AboutOrder';

const PageBasket = (props) => {
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
                        totalPizzasCount={props.totalPizzasCount}
                        totalPrice={props.totalPrice}
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
