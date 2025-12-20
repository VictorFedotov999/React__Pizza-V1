import ItemProductButtonSvg from './ItemProductButtonSvg';

const ItemProductButton = ({ OnClickAddProductCart }) => {
    return (
        <>
            <div className='button button--outline button--add' onClick={OnClickAddProductCart}>
                <ItemProductButtonSvg />
                <span>Добавить</span>
                <i>1</i>
            </div>
        </>
    );
};

export default ItemProductButton;
