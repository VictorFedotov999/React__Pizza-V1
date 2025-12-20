import CategoriesSortirovkaSvgArrow from '../../Categories/CategoriesSortirovka/CategoriesSortirovkaSvg';

const CategoriesSortirovka = (props) => {
    const onChangeActiveTypeIndex = (index) => {
        props.activeSortPopup(index, false);
    };

    const toggleSortPopup = () => {
        props.activeSortPopup(props.ActiveSortPopupIndex, !props.OpenSortPopup);
    };

    return (
        <div className='sort '>
            <div className='sort__label' onClick={toggleSortPopup}>
                <CategoriesSortirovkaSvgArrow />
                <b>Сортировка по:</b>
                <span>{props.sortPopupType[props.ActiveSortPopupIndex]}</span>
            </div>
            <div className={`sort__popup ${props.OpenSortPopup ? '' : 'none'}`}>
                <ul>
                    {props.sortPopupType.map((type, index) => (
                        <li
                            className={props.ActiveSortPopupIndex === index ? 'active' : ''}
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
