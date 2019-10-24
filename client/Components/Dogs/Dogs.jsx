import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterSideBar from '../FilterSideBar/FilterSideBar';
import { ROUTE_PATH } from './../../commons/constants';
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
        <FilterSideBar
          updateFilter={this.updateFilter}
          breedId={breedId}
          gender={gender}
          size={size}
        />
        {dogsToDisplay.map(dog => (
          <div key={dog.id}>
            <Link to={`${DOGS}/${dog.id}`}>{dog.name}</Link> {dog.price}{' '}
            {dog.description}
          </div>
        ))}
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
