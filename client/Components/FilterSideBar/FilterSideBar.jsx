import React from 'react';
import { connect } from 'react-redux';

import './filterSideBar.scss';

const FilterSideBar = ({
  breeds,
  breedId,
  gender,
  updateBreed,
  updateGender
}) => {
  const onChange = event => {
    const breedId = parseInt(event.target.value);
    updateBreed(breedId);
  };

  const onChangeGender = event => {
    const gender = event.target.value;
    updateGender(gender);
  };

  const breedOptions = [{ id: 0, name: 'All Breeds' }, ...breeds];
  const genderOptions = [
    { label: 'All', value: '' },
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' }
  ];

  return (
    <div id="filter-side-bar">
      <span className="category">Breed</span>
      <span className="selection">
        <select id="breed" value={breedId} onChange={onChange}>
          {breedOptions.map(breed => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </span>
      <span className="category">Gender</span>
      <span className="selection">
        {genderOptions.map(genderOption => (
          <label key={genderOption.value}>
            <input
              type="radio"
              name="gender"
              value={genderOption.value}
              checked={gender === genderOption.value}
              onChange={onChangeGender}
            />{' '}
            {genderOption.label}
          </label>
        ))}
      </span>
    </div>
  );
};

const mapStateToProps = ({ breeds }) => ({ breeds });

export default connect(mapStateToProps)(FilterSideBar);
