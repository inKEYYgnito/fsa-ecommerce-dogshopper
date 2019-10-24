import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterSideBar from './../FilterSideBar';
import { ROUTE_PATH } from './../../commons/constants';
import './dogs.scss'
const { DOGS } = ROUTE_PATH;

class Dogs extends Component {
  constructor() {
    super();
    this.state = {
      breedId: 0
    };
  }

  updateBreed = breedId => this.setState({ breedId });

  render() {
    const { breedId } = this.state;
    const { dogs } = this.props;

    const dogsToDisplay =
      breedId === 0 ? dogs : dogs.filter(dog => dog.breedId === breedId);

    return (
      <div>
        <div>
        <FilterSideBar updateBreed={this.updateBreed} breedId={breedId} />
    <div id = 'dogs'>
    {dogsToDisplay.map(dog => (
      <div id ='dog' key={dog.id} >
      <h1><Link to={`${DOGS}/${dog.id}`}>{dog.name}</Link></h1>
        <div id='dogblock'>
          <div id ='dogtext'>
          Price: ${dog.price}<br/>
          Gender: {dog.gender}<br/>
          Age: {dog.age} {dog.ageUnit}s<br/>
          Size: {dog.size}<br/>
          Breed: {dog.breed.name}
            <p id ='description'>{dog.description}</p>
          </div>
            <div id='dogpic'><img src = {dog.imageURL} width="100%" height="100%"/></div> 
        </div>
        <button className='btn-add-crate'>Add {dog.name} to crate!</button>
      </div>
    ))}
    </div>
  </div>
  </div>
    );
  }
}

const mapStateToProps = ({ dogs }) => {
  return {
    dogs
  };
};

export default connect(mapStateToProps)(Dogs);
