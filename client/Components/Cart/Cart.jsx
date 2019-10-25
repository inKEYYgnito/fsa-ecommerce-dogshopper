import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../../commons/constants';
import priceTag from '../../assets/img/icon-price-tag.svg';
import './cart.scss';

const Cart = ({ crate }) => {
    return (
        <div id="cart-container">
            {crate.length ? (
                <>
                    <h1>Cart</h1>
                    <h2>{crate.length > 1 ? 'Here is your chosen one!' : 'Here are your chosen puppers!'}</h2>
                    
                    <Link to={ROUTE_PATH.CRATE_CHECKOUT}>Checkout</Link>
                </>
            ) : <h6>There are no items in your create.</h6>
            }
        </div>
    );
};

const mapStateToProps = ({ dogs, crate }) => {
    return {
        crate: dogs.filter(dog => crate.includes(dog.id))
    };
};

export default connect(mapStateToProps)(Cart);
