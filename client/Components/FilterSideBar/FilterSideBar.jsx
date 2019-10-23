import React from 'react';
import { connect } from 'react-redux';

import './filterSideBar.scss';

const FilterSideBar = ({ breeds, breedId, gender, updateFilter }) => {
  const onChange = event => {
    const { tagName, value, name } = event.target;
    let updatedFilter = {
      [name]: tagName === 'SELECT' ? parseInt(value) : value
    };
    updateFilter(updatedFilter);
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
        <select name="breedId" value={breedId} onChange={onChange}>
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
              onChange={onChange}
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
