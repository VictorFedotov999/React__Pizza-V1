import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PageProducts from './PageProducts';
import {
    ActivePaginationAC,
    AddProductCartAC,
    SetProductsAC,
    UpdateProductInfoAC,
} from '../../Redux/ActionCreator/ProductsAC';

class PageProductsContainer extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:5173/db.json').then((response) => {
            this.props.SetProducts(response.data.pizzas);
        });
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

let mapDispatchToProps = (dispatch) => {
    return {
        SetProducts: (products) => {
            dispatch(SetProductsAC(products));
        },
        ActivePagination: (index) => {
            dispatch(ActivePaginationAC(index));
        },
        UpdateProductInfo: (productId, type, size) => {
            dispatch(UpdateProductInfoAC(productId, type, size));
        },
        AddProductCart: (productDate) => {
            dispatch(AddProductCartAC(productDate));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageProductsContainer);
