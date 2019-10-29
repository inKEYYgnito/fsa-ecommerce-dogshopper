import React from 'react';
import { connect } from 'react-redux';

import './filterSideBar.scss';

const FilterSideBar = ({ breeds, breedId, gender, size, updateFilter }) => {
  const onChange = event => {
    const { tagName, value, name } = event.target;
    let updatedFilter = {
      [name]: tagName === 'SELECT' ? parseInt(value) : value
    };
    updateFilter(updatedFilter);
  };

  const breedOptions = [{ id: 0, name: 'Choose a breed'}, ...breeds];
  const genderOptions = [
    { label: 'All', value: '' },
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' }
  ];
  const sizeOptions = [
    { label: 'All', value: '' },
    { label: 'Small', value: 'S' },
    { label: 'Medium', value: 'M' },
    { label: 'Large', value: 'L' },
    { label: 'Extra Lage', value: 'XL' }
  ];

  return (
    <div id="filter-side-bar">
      <div id='breed'>
        <span className="category">Breed</span>
        <span className="box">
          <select name="breedId" value={breedId} onChange={onChange}>
            {breedOptions.map(breed => (
              <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
            ))}
          </select>
        </span>
      </div>

      <div id='gender'>
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

      <div id ='size'>
        <span className="category">Size</span>
        <span className="selection">
          {sizeOptions.map(sizeOption => (
            <label key={sizeOption.value}>
              <input
                type="radio"
                name="size"
                value={sizeOption.value}
                checked={size === sizeOption.value}
                onChange={onChange}
              />{' '}
              {sizeOption.label}
            </label>
          ))}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ breeds }) => ({ breeds });

export default connect(mapStateToProps)(FilterSideBar);
