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
        <FilterSideBar updateBreed={this.updateBreed} breedId={breedId} />
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
