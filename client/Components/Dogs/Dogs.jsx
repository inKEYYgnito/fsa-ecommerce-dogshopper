import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CrateButton from './../CrateButton/CrateButton';

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
    const { crate } = this.props
    const dogsToDisplay = this.filterDogs();
    const filteredDoggos = dogsToDisplay.filter(dog => !crate.includes(dog.id))
    return (
      <div id="dog-list-container">
          <FilterSideBar
            updateFilter={this.updateFilter}
            breedId={breedId}
            gender={gender}
            size={size}
          />
        <div id='dogs'>
            {filteredDoggos.map(dog => (
            <div id='dog' key={dog.id} >
              <h2>{dog.name}</h2>
             <div className='dogcontent'>
               <div id='dogtext'>
                  <h4>{dog.breed.name}</h4>
                  <p>Gender:{dog.gender}</p>
                 <p>Age: {dog.age} {dog.ageUnit}s</p>
                </div>
                  <Link id = 'dogpic' to={`/dogs/${dog.id}`}>
                    <img src={dog.imageURL} />
                  </Link>
              </div>
              <div id="btn">
                <CrateButton dog={dog} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ dogs, crate }) => {
  return {
    dogs,
    crate
  };
};

export default connect(mapStateToProps)(Dogs);
