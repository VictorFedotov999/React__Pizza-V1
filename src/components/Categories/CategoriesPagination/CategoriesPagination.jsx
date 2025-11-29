const CategoriesPagination = (props) => {
    const onChangeActiveCategoryIndex = (index) => {
        props.ActivePagination(index);
    };

    return (
        <div className='categories'>
            <ul>
                {props.categories.map((c, index) => (
                    <li
                        className={props.ActiveCategoryIndex === index ? 'active' : ''}
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
