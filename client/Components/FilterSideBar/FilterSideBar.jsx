import React from 'react';
import { connect } from 'react-redux';

import './filterSideBar.scss';

const FilterSideBar = ({ breeds, breedId, updateBreed }) => {
  const onChange = event => {
    const breedId = parseInt(event.target.value);
    updateBreed(breedId);
  };

  const breedOptions = [{ id: 0, name: 'All Breeds' }, ...breeds];
  const genderOptions = [
    { label: 'All', value: '' },
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' }
  ];

  return (
    <div id="filter-side-bar">
      <span class="category">Breed</span>
      <span class="selection">
        <select id="breed" value={breedId} onChange={onChange}>
          {breedOptions.map(breed => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </span>
      <span class="category">Gender</span>
      <span class="selection">
        {genderOptions.map(gender => (
          <label>
            <input type="radio" name="gender" value={gender.value} />{' '}
            {gender.label}
          </label>
        ))}
      </span>
    </div>
  );
};

const mapStateToProps = ({ breeds }) => ({ breeds });

export default connect(mapStateToProps)(FilterSideBar);
