import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PageProducts from './PageProducts';

import {
    ActivePagination,
    SetProducts,
    UpdateProductInfo,
    activeSortPopup,
} from '../../Redux/ActionCreator/ProductsAC';

import { addToCart, getPizzas, getFilteredProducts } from '../../Redux/Reducers/ProductsReducer';
import {
    getActiveCategoryIndex,
    getActiveSortPopupIndex,
    getCategoriesPagination,
    getOpenSortPopup,
    getProductInfo,
    getProducts,
    getSortPopupType,
} from '../../selectors/productsSelector';

import { ProductType,CartItemType } from '../../Type/productsType';
import { AppStateType } from '../../Redux/reduxStore';

type MapStateToProps = {
    products:ProductType[],
        categories: string[],
        ActiveCategoryIndex: number ,

        productInfo: Record<string, {  
        productType: number;
        productSize: number;
    }>,
        sortPopupType: string[], 
        ActiveSortPopupIndex: number,
        OpenSortPopup: boolean,
}

type MapDispatchPropsType = {
    SetProducts: (products:ProductType[]) => void
    ActivePagination: (index:number) => void
    UpdateProductInfo: (productId: string,
    selectedType: number,
    selectedSize: number) => void
    AddProductCart: (productDate: CartItemType) => void
    getPizzas: () => void
    activeSortPopup: (ActiveSortPopupIndex: number,
    OpenSortPopup: boolean) => void
    
}

type PropsType = MapStateToProps & MapDispatchPropsType

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

let mapStateToProps = (state:AppStateType):MapStateToProps => {
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

export default connect<MapStateToProps, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    SetProducts,
    ActivePagination,
    UpdateProductInfo,
    AddProductCart: addToCart,
    getPizzas,
    activeSortPopup,
})(PageProductsContainer);
