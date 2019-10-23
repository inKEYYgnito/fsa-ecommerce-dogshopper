import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTE_PATH } from './../../commons/constants';
import './dogs.scss'
const { DOGS } = ROUTE_PATH;

const Dogs = ({ dogs }) => (
    <div>
      <button>Back to ALL DOGS</button>
    <div id = 'dogs'>
    {dogs.map(dog => (
      <div id ='dog' key={dog.id} >
      <h1><Link to={`${DOGS}/${dog.id}`}>{dog.name}</Link></h1>
        <div id='dogblock'>
          <div id ='dogtext'>
          Price: ${dog.price}<br/>
          Gender: {dog.gender}<br/>
          Age: {dog.age} {dog.ageUnit}s<br/>
          Size: {dog.size}
            <p id ='description'>{dog.description}</p>
          </div>
            <div id='dogpic'><img src = {dog.imageURL} width="100%" height="100%"/></div> 
        </div>
        <button className='btn-add-crate'>Add {dog.name} to crate!</button>
      </div>
    ))}
    </div>
  </div>
);

const mapStateToProps = ({ dogs }) => {
  return {
    dogs
  };
};

export default connect(mapStateToProps)(Dogs);
