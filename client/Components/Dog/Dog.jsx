import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import CrateButton from './../CrateButton/CrateButton';
import priceTag from '../../assets/img/icon-price-tag.svg';
import './dog.scss';

const Dog = ({ dog }) => {
  return dog ? (
    <div id="dog-container">
      <Link id="btn-back" className="btn-controls" to='/dogs'><i className = 'left'></i>Back to ALL DOGS</Link>
      <div id="dog-images">
        <div className="polaroid">
          <img id="dog-image" src={dog.imageURL} />
          <p>{dog.description}</p>
        </div>
      </div>
      <div id="dog-info">
        <h1 className="name">{dog.name}</h1>
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
        <CrateButton dog={dog} />
      </div>
    </div>
  ) : <></>
}

const mapStateToProps = ({ dogs }, { match }) => {
  const id = match.params.id;
  return {
    dog: dogs.find(dog => dog.id === id)
  };
};

export default connect(mapStateToProps)(Dog);
