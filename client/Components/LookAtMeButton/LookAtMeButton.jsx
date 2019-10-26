import React from 'react';
import { connect } from 'react-redux';
import { ROUTE_PATH } from './../../commons/constants';
import { Link } from 'react-router-dom'
const { DOGS } = ROUTE_PATH;

const LookAtMe = ({dog}) => {
    return (
        <button className="btn-add-crate">
            <Link to={`${DOGS}/${dog.id}`}>Look at me!</Link>
        </button>
    )
}


export default connect()(LookAtMe);
  