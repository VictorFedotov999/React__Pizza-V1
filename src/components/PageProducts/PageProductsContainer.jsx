import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PageProducts from './PageProducts';
import {
    ActivePaginationAC,
    SetProductsAC,
    UpdateProductInfoAC,
} from '../../Redux/ActionCreator/ProductsAC';
import { addToCart, getPizzas } from '../../Redux/Reducers/ProductsReducer';

class PageProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getPizzas();
    }

    render() {
        return (
            <PageProducts
                products={this.props.products}
                categories={this.props.categories}
                ActiveCategoryIndex={this.props.ActiveCategoryIndex}
                ActivePagination={this.props.ActivePagination}
                UpdateProductInfo={this.props.UpdateProductInfo}
                productInfo={this.props.productInfo}
                AddProductCart={this.props.AddProductCart}
                productsCart={this.props.productsCart}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.PageProduct.products,
        categories: state.PageProduct.categories.categoriesPagination,
        ActiveCategoryIndex: state.PageProduct.categories.ActiveCategoryIndex,
        productInfo: state.PageProduct.productInfo,
    };
};

export default connect(mapStateToProps, {
    SetProducts: SetProductsAC,
    ActivePagination: ActivePaginationAC,
    UpdateProductInfo: UpdateProductInfoAC,
    AddProductCart: addToCart,
    getPizzas,
})(PageProductsContainer);
