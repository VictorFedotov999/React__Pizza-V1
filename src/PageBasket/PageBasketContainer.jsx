import React from 'react';
import { connect } from 'react-redux';
import PageBasket from '../PageBasket/PageBasket';
import { getProductCart, removeCartProductThunk } from '../Redux/Reducers/ProductsReducer';
import { removeCartThunk } from '../Redux/Reducers/ProductsReducer';
import { removeCartProduct } from '../Redux/ActionCreator/ProductsAC';
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
        productsCart: state.PageProduct.productsCart,
    };
};

export default connect(mapStateToProps, {
    getProductCart,
    removeCartThunk,
    removeCartProductThunk,
})(PageBasketContainer);
