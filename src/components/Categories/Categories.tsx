import CategoriesPagination from './CategoriesPagination/CategoriesPagination';
import CategoriesSortirovka from './CategoriesSortirovka/CategoriesSortirovka';

import { CategoriesType, SortPopupType } from '../../Redux/types/productsType';

type PropsType = {
    categories: CategoriesType;
    sortPopup: SortPopupType;
    ActivePagination: (index: number) => void;
    activeSortPopup: (ActiveSortPopupIndex: number, OpenSortPopup: boolean) => void;
};

const Categories = (props: PropsType) => {
    return (
        <div className='content__top'>
            <CategoriesPagination
                categories={props.categories}
                ActivePagination={props.ActivePagination}
            />
            <CategoriesSortirovka
                sortPopup={props.sortPopup}
                // ActiveSortPopupIndex={props.ActiveSortPopupIndex}
                // OpenSortPopup={props.OpenSortPopup}
                activeSortPopup={props.activeSortPopup}
            />
        </div>
    );
};

export default Categories;
