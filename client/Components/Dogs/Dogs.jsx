import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTE_PATH } from './../../commons/constants';
import './dogs.scss'
const { DOGS } = ROUTE_PATH;

const Dogs = ({ dogs }) => (
  <div id='dogs'>
    {dogs.map(dog => (
      <div id ='dog' key={dog.id} >
      <h1><Link to={`${DOGS}/${dog.id}`}>{dog.name}</Link></h1>
         Price: ${dog.price}
        <p id ='description'>{dog.description}</p>
        <button id='button'>Add to cart</button>
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ dogs }) => {
  return {
    dogs
  };
};

export default connect(mapStateToProps)(Dogs);
