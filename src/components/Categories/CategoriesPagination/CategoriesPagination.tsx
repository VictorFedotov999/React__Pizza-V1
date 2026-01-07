import { CategoriesType } from '../../../ts/types/productsType';

type PropsType = {
    categories: CategoriesType;
    ActivePagination: (index: number) => void;
};

const CategoriesPagination = (props: PropsType) => {
    const onChangeActiveCategoryIndex = (index: number) => {
        props.ActivePagination(index);
    };

    return (
        <div className='categories'>
            <ul>
                {props.categories.categoriesPagination.map((c: string, index: number) => (
                    <li
                        key={c}
                        className={props.categories.ActiveCategoryIndex === index ? 'active' : ''}
                        onClick={() => onChangeActiveCategoryIndex(index)}
                    >
                        {c}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesPagination;
