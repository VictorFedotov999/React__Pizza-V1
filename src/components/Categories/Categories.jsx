import CategoriesPagination from './CategoriesPagination/CategoriesPagination';
import CategoriesSortirovka from './CategoriesSortirovka/CategoriesSortirovka';
const Categories = (props) => {
    return (
        <div className='content__top'>
            <CategoriesPagination
                categories={props.categories} //true
                ActiveCategoryIndex={props.ActiveCategoryIndex} //true
                ActivePagination={props.ActivePagination} //true
            />
            <CategoriesSortirovka
                sortPopupType={props.sortPopupType}
                ActiveSortPopupIndex={props.ActiveSortPopupIndex}
                OpenSortPopup={props.OpenSortPopup}
                activeSortPopup={props.activeSortPopup}
            />
        </div>
    );
};

export default Categories;
