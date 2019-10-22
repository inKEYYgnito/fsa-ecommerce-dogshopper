import React from 'react';
import { connect } from 'react-redux';
import './dog.scss'

const Dog = ({ dog }) => (
  <div id="dog-container">
    {dog && (
      <>
        {dog.name}
        {dog.description}
        {dog.price}
        {dog.imageURL}
        {dog.breed.name}
      </>
    )}
  </div>
);

const mapStateToProps = ({ dogs }, { match }) => {
  const id = match.params.id;
  return {
    dog: dogs.find(dog => dog.id === id)
  };
};

export default connect(mapStateToProps)(Dog);
