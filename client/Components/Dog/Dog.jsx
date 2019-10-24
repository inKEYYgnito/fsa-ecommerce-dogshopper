import React from 'react';
import { connect } from 'react-redux';

import { addToCrate } from '../../store/actions/actions';
import priceTag from '../../assets/img/icon-price-tag.svg';
import './dog.scss';

const Dog = ({ dog, addToCrate }) => {
  return dog ? (
    <div id="dog-container">
      <div id="dog-images">
        <div className="polaroid">
          <img id="dog-image" src={dog.imageURL} />
          <p>{dog.description}</p>
        </div>
      </div>
      <div id="dog-info">
        <span id="name">{dog.name}</span>
        <div className="property">
          <span>Breed</span>
          <span>{dog.breed.name}</span>
        </div>
        <div className="property">
          <span>Gender</span>
          <span>{dog.gender}</span>
        </div>
        <div className="property">
          <span>Age</span>
          <span>{`${dog.age} ${dog.ageUnit}${dog.age > 1 ? 's' : ''}`}</span>
        </div>
        <div className="property">
          <span>Size</span>
          <span>{dog.size}</span>
        </div>
        <div className="property">
          <img src={priceTag} />
          <span>${dog.price}</span>
        </div>
        <button className="btn-add-crate" onClick={() => addToCrate(dog.id)}>
          Add {dog.name} to crate!
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = ({ dogs }, { match }) => {
  const id = match.params.id;
  return {
    dog: dogs.find(dog => dog.id === id)
  };
};

const mapDispatchToProps = {
  addToCrate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dog);
