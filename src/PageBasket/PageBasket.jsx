import TitleBasket from '../components/TitleBasket/TitleBasket';
import CartClear from '../components/CartClear/CartClear';
import CartsItems from '../components/CartsItems/CartsItems';
import AboutOrder from '../components/AboutOrder/AboutOrder';
const PageBasket = (props) => {
    return (
        <>
            <div className='content'>
                <div className='container container--cart'>
                    <div className='cart'>
                        <div className='cart__top'>
                            <TitleBasket />
                            <CartClear />
                        </div>

                        <CartsItems productsCart={props.productsCart} />
                        <AboutOrder />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageBasket;
