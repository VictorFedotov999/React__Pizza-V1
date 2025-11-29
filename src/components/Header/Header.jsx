import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderBtn from './HeaderBtn/HeaderBtn';
const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <HeaderLogo />
                <HeaderBtn />
            </div>
        </div>
    );
};

export default Header;
