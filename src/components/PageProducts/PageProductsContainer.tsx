import React from 'react';
import { connect } from 'react-redux';
import PageProducts from './PageProducts';
import { AppStateType } from '../../Redux/reduxStore';
import {
    PropsType,
    MapStateToPropsType,
    MapDispatchPropsType,
} from '../../Redux/types/productsContainerType';
import {
    getActiveCategoryIndex,
    getProducts,
    getCategoriesPagination,
    getProductInfo,
    getSortPopupType,
    getActiveSortPopupIndex,
    getOpenSortPopup,
} from '../../Redux/selectors/productsSelector';

import {
    SetProducts,
    ActivePagination,
    UpdateProductInfo,
    getFilteredProducts,
    activeSortPopup,
} from '../../Redux/actions/productsActions';

import { getPizzas, addToCart } from '../../Redux/thunks/productsThunks';

class PageProductsContainer extends React.Component<PropsType> {
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
                sortPopupType={this.props.sortPopupType}
                ActiveSortPopupIndex={this.props.ActiveSortPopupIndex}
                OpenSortPopup={this.props.OpenSortPopup}
                activeSortPopup={this.props.activeSortPopup}
            />
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    const ActiveCategoryIndex = getActiveCategoryIndex(state) || 0;
    const filteredProducts = getFilteredProducts(getProducts(state), ActiveCategoryIndex);
    return {
        products: filteredProducts,
        categories: getCategoriesPagination(state),
        ActiveCategoryIndex: getActiveCategoryIndex(state),
        productInfo: getProductInfo(state),
        sortPopupType: getSortPopupType(state),
        ActiveSortPopupIndex: getActiveSortPopupIndex(state),
        OpenSortPopup: getOpenSortPopup(state),
    };
};

export default connect<MapStateToPropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {
        SetProducts,
        ActivePagination,
        UpdateProductInfo,
        AddProductCart: addToCart,
        getPizzas,
        activeSortPopup,
    },
)(PageProductsContainer);
