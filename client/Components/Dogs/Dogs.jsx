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
      gender: ''
    };
  }

  updateBreed = breedId => this.setState({ breedId });

  updateGender = gender => this.setState({ gender });

  filterDogs = () => {
    const { dogs } = this.props;
    const { breedId, gender } = this.state;

    let filteredDogs =
      breedId === 0 ? dogs : dogs.filter(dog => dog.breedId === breedId);
    filteredDogs =
      gender === ''
        ? filteredDogs
        : filteredDogs.filter(dog => dog.gender === gender);

    return filteredDogs;
  };

  render() {
    const { breedId, gender } = this.state;
    const dogsToDisplay = this.filterDogs();

    return (
      <div>
        <FilterSideBar
          updateBreed={this.updateBreed}
          updateGender={this.updateGender}
          breedId={breedId}
          gender={gender}
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
