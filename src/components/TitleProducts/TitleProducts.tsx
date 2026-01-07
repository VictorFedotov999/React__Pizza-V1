import { CategoriesType } from '../../ts/types/productsType';

type PropsType = {
    categories: CategoriesType;
};

const TitleProducts = (props: PropsType) => {
    const title = props.categories.categoriesPagination[props.categories.ActiveCategoryIndex];
    return <h2 className='content__title'>{title}</h2>;
};

export default TitleProducts;
