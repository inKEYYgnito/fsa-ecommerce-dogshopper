import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../../commons/constants';
import CrateButton from '../CrateButton/CrateButton';
import priceTag from '../../assets/img/icon-price-tag.svg';
import './cart.scss';

const Cart = ({ crate, isEditable }) => {
    return (
        <div id="cart-container">
            {crate.length ? (
                <>
                    <h1 className="page-title">Confirm Orders</h1>
                    <h3>{crate.length > 1 ? 'Here is your chosen one!' : 'Here are your chosen puppers!'}</h3>
                    {
                        crate.map(dog => (
                            <div className="cart-dogs" key={dog.id}>
                                <div className="polaroid">
                                    <img className="dog-pic" src={dog.imageURL} />
                                </div>
                                <h3>{dog.name}</h3>
                                <img src={priceTag} />
                                <span>{dog.price}</span>
                                { isEditable && <CrateButton dog={dog} /> }
                            </div>
                        ))
                    }
                    { isEditable &&  <Link to={ROUTE_PATH.CRATE_CHECKOUT}>Confirm Billing Address</Link> }
                </>
            ) :
                <>
                    <h3>No cute and cuddly pup has been selected.</h3>
                    <span>Please visit all available dogs and try again.</span>
                </>
            }
        </div>
    );
};

const mapStateToProps = ({ dogs, crate }, { location }) => {
    const endpoints = location.pathname.split('/')
    const dogsInCrate = dogs.filter(dog => crate.includes(dog.id))
    return {
        isEditable: endpoints[endpoints.length - 1] === 'crate',
        crate: dogsInCrate,
        total: dogsInCrate.reduce((a, c) => a + c.price, 0)
    };
};

export default connect(mapStateToProps)(Cart);
