import { Link } from 'react-router';
import HeaderBtnSvg from './HeaderBtnSvg';
const HeaderBtn = (props) => {
    return (
        <Link to='/basket'>
            <div className='header__cart'>
                <div className='button button--cart'>
                    <span>{props.totalPrice} ₽</span>
                    <div className='button__delimiter'></div>
                    <HeaderBtnSvg />
                    <span>{props.totalPizzasCount}</span>
                </div>
            </div>
        </Link>
    );
};

export default HeaderBtn;
