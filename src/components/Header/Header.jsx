import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderBtn from './HeaderBtn/HeaderBtn';
const Header = (props) => {
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
