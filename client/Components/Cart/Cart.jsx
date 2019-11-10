import React from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { ROUTE_PATH } from '../../commons/constants';
import CrateButton from '../CrateButton/CrateButton';
import priceTag from '../../assets/img/icon-price-tag.svg';
import './cart.scss';

const Cart = ({ crate, isEditable, total }) => {
    return (
        <div id="cart-container">
            {crate.length ? (
                <>
                    <h1 className="page-title">Confirm Orders</h1>

                    <div id="cart-dogs-wrapper">
                        <h3>{crate.length === 1 ? 'Here is your chosen one!' : 'Here are your chosen puppers!'}</h3>
                        {
                            crate.map(dog => (
                                <div className="cart-dogs" key={dog.id}>
                                    <div className="polaroid">
                                        <img className="dog-pic" src={dog.imageURL} />
                                    </div>
                                    <h3>{dog.name}</h3>
                                    <div className="price-container">
                                        <img src={priceTag} />
                                        <span>${dog.price}</span>
                                    </div>
                                    { isEditable && <CrateButton dog={dog} /> }

                                </div>
                            ))
                        }
                        <div style={{marginTop: '2vw'}} className="price-container">
                            <h2>Total:</h2>
                            <img src={priceTag} />
                            <span>${total}</span>
                        </div>
                        { isEditable &&  <Link className="btn-controls" to={`${ROUTE_PATH.CRATE_CHECKOUT}#checkout-form`} smooth>Confirm Billing Address</Link> }
                    </div>
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
        total: dogsInCrate.reduce((a, c) => parseInt(a, 10) + parseInt(c.price, 10), 0)
    };
};

export default connect(mapStateToProps)(Cart);
