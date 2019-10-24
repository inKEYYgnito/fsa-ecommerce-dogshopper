import React from 'react';
import { connect } from 'react-redux';

import { addToCrate, removeFromCrate } from '../../store/actions/actions';
import './crateButton.scss';

const CrateButton = ({ crate, dog, addToCrate, removeFromCrate }) => {
  return crate && crate.includes(dog.id) ? (
    <button className="btn-add-crate" onClick={() => removeFromCrate(dog.id)}>
      Remove {dog.name} from crate!
    </button>
  ) : (
    <button className="btn-add-crate" onClick={() => addToCrate(dog.id)}>
      Add {dog.name} to crate!
    </button>
  );
};

const mapStateToProps = ({ crate }) => ({ crate });

const mapDispatchToProps = {
  addToCrate,
  removeFromCrate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CrateButton);
