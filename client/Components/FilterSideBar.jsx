import React from 'react';
import { connect } from 'react-redux';

const FilterSideBar = ({ breeds, breedId, updateBreed }) => {
  const onChange = event => {
    const breedId = parseInt(event.target.value);
    updateBreed(breedId);
  };

  return (
    <>
      <select value={breedId} onChange={onChange}>
        <option key={0} value={0}>
          -- Any Breed --
        </option>
        {breeds.map(breed => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
    </>
  );
};

const mapStateToProps = ({ breeds }) => ({ breeds });

export default connect(mapStateToProps)(FilterSideBar);
