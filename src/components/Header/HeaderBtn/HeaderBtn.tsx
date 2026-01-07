import HeaderBtnSvg from './HeaderBtnSvg';
import { Link } from 'react-router';
import { CountLogicPropsType } from '../../../ts/types/commonTypes/commonPropsType';

const HeaderBtn = (props: CountLogicPropsType) => {
    return (
        <Link to='/cart'>
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
