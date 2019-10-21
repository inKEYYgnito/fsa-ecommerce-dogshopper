import React from 'react';
import { connect } from 'react-redux';

const Dog = ({ dog }) => (
  <>
    {dog && (
      <>
        {dog.name}
        {dog.description}
        {dog.price}
        {dog.imageUrl}
      </>
    )}
  </>
);

const mapStateToProps = ({ dogs }, { match }) => {
  const id = match.params.id;
  return {
    dog: dogs.find(dog => dog.id === id)
  };
};

export default connect(mapStateToProps)(Dog);
