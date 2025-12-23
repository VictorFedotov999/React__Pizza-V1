import React from 'react';
import { connect } from 'react-redux';
import { getTotalPizzasCount, getTotalPrice } from '../../Redux/selectors/basketSelectors';

import Header from './Header';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header
                totalPizzasCount={this.props.totalPizzasCount}
                totalPrice={this.props.totalPrice}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        totalPizzasCount: getTotalPizzasCount(state),
        totalPrice: getTotalPrice(state),
    };
};

export default connect(mapStateToProps, {})(HeaderContainer);
