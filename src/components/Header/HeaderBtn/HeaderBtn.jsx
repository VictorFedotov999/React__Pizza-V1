import { Link } from 'react-router';
import HeaderBtnSvg from './HeaderBtnSvg';
const HeaderBtn = () => {
    return (
        <Link to='/basket'>
            <div className='header__cart'>
                <div className='button button--cart'>
                    <span>520 ₽</span>
                    <div className='button__delimiter'></div>
                    <HeaderBtnSvg />
                    <span>3</span>
                </div>
            </div>
        </Link>
    );
};

export default HeaderBtn;
