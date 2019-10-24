import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterSideBar from '../FilterSideBar/FilterSideBar';
import { ROUTE_PATH } from './../../commons/constants';
import './dogs.scss'
const { DOGS } = ROUTE_PATH;

class Dogs extends Component {
  constructor() {
    super();
    this.state = {
      breedId: 0,
      gender: '',
      size: ''
    };
  }

  updateFilter = filterObject => this.setState(filterObject);

  filter = (sourceList, criteria, filterFunction) => {
    return criteria ? sourceList : sourceList.filter(filterFunction);
  };

  filterDogs = () => {
    const { dogs } = this.props;
    const { breedId, gender, size } = this.state;

    let filteredDogs = this.filter(
      dogs,
      breedId === 0,
      dog => dog.breedId === breedId
    );
    filteredDogs = this.filter(
      filteredDogs,
      gender === '',
      dog => dog.gender === gender
    );
    filteredDogs = this.filter(
      filteredDogs,
      size === '',
      dog => dog.size === size
    );

    return filteredDogs;
  };

  render() {
    const { breedId, gender, size } = this.state;
    const dogsToDisplay = this.filterDogs();

    return (
      <div>
        <div>
          <div className = 'filter'>
        <FilterSideBar 
          updateFilter={this.updateFilter}
          breedId={breedId}
          gender={gender}
          size={size}
          />
          </div>
    <div id = 'dogs'>
    {dogsToDisplay.map(dog => (
      <div id ='dog' key={dog.id} >
      <h1><Link to={`${DOGS}/${dog.id}`}>{dog.name}</Link></h1>
      <div className ='dogcontent'>
          <div id ='dogtext'>
          Breed: {dog.breed.name}
            <p id ='description'>{dog.description}</p>
      </div>
            <div id='dogpic'><img src = {dog.imageURL} width="100%" height="100%"/></div> 
        </div>
        <div id = 'btn'>
        <button className='btn-add-crate'>Add {dog.name} to crate!</button>
        </div>
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
