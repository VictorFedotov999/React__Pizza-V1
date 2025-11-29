import CategoriesPagination from './CategoriesPagination/CategoriesPagination';
import CategoriesSortirovka from './CategoriesSortirovka/CategoriesSortirovka';
const Categories = (props) => {
    return (
        <div className='content__top'>
            <CategoriesPagination
                categories={props.categories}
                ActiveCategoryIndex={props.ActiveCategoryIndex}
                ActivePagination={props.ActivePagination}
            />
            <CategoriesSortirovka />
        </div>
    );
};

export default Categories;
