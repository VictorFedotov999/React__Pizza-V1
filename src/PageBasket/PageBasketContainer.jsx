import React from 'react';
import { connect } from 'react-redux';
import PageBasket from '../PageBasket/PageBasket';
import { getProductCart } from '../Redux/Reducers/ProductsReducer';
class PageBasketContainer extends React.Component {
    componentDidMount() {
        this.props.getProductCart();
    }

    render() {
        return <PageBasket productsCart={this.props.productsCart} />;
    }
}

let mapStateToProps = (state) => {
    return {
        productsCart: state.PageProduct.productsCart,
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {};
// };

export default connect(mapStateToProps, { getProductCart })(PageBasketContainer);
