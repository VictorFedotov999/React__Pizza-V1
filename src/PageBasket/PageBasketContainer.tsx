import React from 'react';
import { connect } from 'react-redux';
import PageBasket from './PageBasket';
import { AppStateType } from '../Redux/reduxStore';
import { getProductsCart } from '../Redux/selectors/basketSelectors';
import {
    getProductCart,
    removeCartThunk,
    removeCartProductThunk,
} from '../Redux/thunks/basketThunks'; // Исправляем импорт

class PageBasketContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getProductCart();
    }

    render() {
        return (
            <PageBasket
                productsCart={this.props.productsCart}
                removeCartThunk={this.props.removeCartThunk}
                removeCartProductThunk={this.props.removeCartProductThunk}
            />
        );
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        productsCart: getProductsCart(state),
    };
};

export default connect(mapStateToProps, {
    getProductCart,
    removeCartThunk,
    removeCartProductThunk,
})(PageBasketContainer);
