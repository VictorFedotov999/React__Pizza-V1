import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderBtn from './HeaderBtn/HeaderBtn';
import { CountLogicPropsType } from '../../ts/types/commonTypes/commonPropsType';

const Header = (props: CountLogicPropsType) => {
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
