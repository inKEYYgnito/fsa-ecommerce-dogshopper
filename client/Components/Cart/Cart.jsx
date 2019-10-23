import React from 'react';
import { connect } from 'react-redux';
import priceTag from '../../assets/img/icon-price-tag.svg';
import './cart.scss';

const Cart = ({ orderItems }) => {
    return (
        <div id="cart-container">
            {
                orderItems.length ?
                    <>
                        <h1>Here are your orders.</h1>
                    </> :
                    <>
                        <h1>Don't see your items? Sign in.</h1>
                        <h6>There are no items in your create.</h6>
                    </>
            }
        </div>
    )
}

const mapStateToProps = () => {
    return {
        orderItems: []
    }
}

export default connect(mapStateToProps)(Cart);