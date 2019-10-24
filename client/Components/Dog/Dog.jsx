import React from 'react';
import { connect } from 'react-redux';

import { addToCrate, removeFromCrate } from '../../store/actions/actions';
import priceTag from '../../assets/img/icon-price-tag.svg';
import './dog.scss';

const Dog = ({ dog, crate, addToCrate, removeFromCrate }) => {
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
        {crate && crate.includes(dog.id) ? (
          <button
            className="btn-add-crate"
            onClick={() => removeFromCrate(dog.id)}
          >
            Remove {dog.name} from crate!
          </button>
        ) : (
          <button className="btn-add-crate" onClick={() => addToCrate(dog.id)}>
            Add {dog.name} to crate!
          </button>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = ({ dogs, crate }, { match }) => {
  const id = match.params.id;
  return {
    dog: dogs.find(dog => dog.id === id),
    crate
  };
};

const mapDispatchToProps = {
  addToCrate,
  removeFromCrate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dog);
