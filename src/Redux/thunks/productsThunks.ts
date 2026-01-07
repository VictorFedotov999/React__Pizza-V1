import { Dispatch } from 'redux';
import { ProductsActionType } from '../../ts/types/productsType';
import { pizzasApi } from '../../api/api';
import { SetProducts } from '../actions/productsActions';

type DispatchType = Dispatch<ProductsActionType>;

export const getPizzas = () => {
    return (dispatch: DispatchType) => {
        pizzasApi.getPizzas().then((data) => {
            dispatch(SetProducts(data));
        });
    };
};
