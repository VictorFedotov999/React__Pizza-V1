import React from 'react';
import { connect } from 'react-redux';
import { getTotalPizzasCount, getTotalPrice } from '../../Redux/selectors/basketSelectors';
import Header from './Header';
import { AppStateType } from '../../Redux/reduxStore';

type PropsType = {
    totalPizzasCount: number;
    totalPrice: number;
};

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return (
            <Header
                totalPizzasCount={this.props.totalPizzasCount}
                totalPrice={this.props.totalPrice}
            />
        );
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        totalPizzasCount: getTotalPizzasCount(state),
        totalPrice: getTotalPrice(state),
    };
};

export default connect(mapStateToProps, {})(HeaderContainer);
