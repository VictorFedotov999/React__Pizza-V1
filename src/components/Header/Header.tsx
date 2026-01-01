import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderBtn from './HeaderBtn/HeaderBtn';

type PropsType = {
    totalPizzasCount: number;
    totalPrice: number;
};

const Header = (props: PropsType) => {
    return (
        <div className='header'>
            <div className='container'>
                <HeaderLogo />
                <HeaderBtn
                    totalPizzasCount={props.totalPizzasCount}
                    totalPrice={props.totalPrice}
                />
            </div>
        </div>
    );
};

export default Header;
