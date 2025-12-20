import React from 'react';
import { connect } from 'react-redux';
import PageBasket from './PageBasket';

import {
    removeCartThunk,
    removeCartProductThunk,
    getProductCart,
} from '../Redux/thunks/productsThunks';
import { getProductsCart } from '../Redux/selectors/basketSelectors';

class PageBasketContainer extends React.Component {
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

let mapStateToProps = (state) => {
    return {
        productsCart: getProductsCart(state),
    };
};

export default connect(mapStateToProps, {
    getProductCart,
    removeCartThunk,
    removeCartProductThunk,
})(PageBasketContainer);
