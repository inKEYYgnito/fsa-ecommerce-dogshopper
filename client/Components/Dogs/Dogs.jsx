import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterSideBar from './../FilterSideBar';
import { ROUTE_PATH } from './../../commons/constants';
const { DOGS } = ROUTE_PATH;

const Dogs = ({ dogs }) => (
  <div>
    <FilterSideBar />
    {dogs.map(dog => (
      <div key={dog.id}>
        <Link to={`${DOGS}/${dog.id}`}>{dog.name}</Link> {dog.price}{' '}
        {dog.description}
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
