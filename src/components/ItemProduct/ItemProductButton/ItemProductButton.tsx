import ItemProductButtonSvg from './ItemProductButtonSvg';

type PropsType = {
    OnClickAddProductCart: () => void;
};

const ItemProductButton = ({ OnClickAddProductCart }: PropsType) => {
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
