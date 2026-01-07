import CategoriesSortirovkaSvgArrow from '../../Categories/CategoriesSortirovka/CategoriesSortirovkaSvg';
import { SortPopupType } from '../../../ts/types/productsType';

type PropsType = {
    sortPopup: SortPopupType;
    activeSortPopup: (ActiveSortPopupIndex: number, OpenSortPopup: boolean) => void;
};

const CategoriesSortirovka = (props: PropsType) => {
    const onChangeActiveTypeIndex = (index: number) => {
        props.activeSortPopup(index, false);
    };

    const toggleSortPopup = () => {
        props.activeSortPopup(props.sortPopup.ActiveSortPopupIndex, !props.sortPopup.OpenSortPopup);
    };

    return (
        <div className='sort '>
            <div className='sort__label' onClick={toggleSortPopup}>
                <CategoriesSortirovkaSvgArrow />
                <b>Сортировка по:</b>
                <span>{props.sortPopup.sortPopupType[props.sortPopup.ActiveSortPopupIndex]}</span>
            </div>
            <div className={`sort__popup ${props.sortPopup.OpenSortPopup ? '' : 'none'}`}>
                <ul>
                    {props.sortPopup.sortPopupType.map((type, index) => (
                        <li
                            className={
                                props.sortPopup.ActiveSortPopupIndex === index ? 'active' : ''
                            }
                            onClick={() => onChangeActiveTypeIndex(index)}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoriesSortirovka;
