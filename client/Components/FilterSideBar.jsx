import React from 'react';
import { connect } from 'react-redux';

const FilterSideBar = ({ breeds }) => (
  <>
    <select>
      <option key="">-- Any Breed --</option>
      {breeds.map(breed => (
        <option key={breed.id}>{breed.name}</option>
      ))}
    </select>
  </>
);

const mapStateToProps = ({ breeds }) => ({ breeds });

export default connect(mapStateToProps)(FilterSideBar);
