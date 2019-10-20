import React from 'react';
import { connect } from 'react-redux';

const Dogs = ({ dogs }) => (
  <div>
    {dogs.map(dog => (
      <div key={dog.id}>
        {dog.name} {dog.price} {dog.description}
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
