import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createRepo } from '../actions';

const Dropdown = ({ result }) => {
  const handleClick = () => {
    createRepo(result);
  };

  return (
    <div>
      <p onClick={handleClick}>{result.full_name}</p>
    </div>
  );
};

Dropdown.propTypes = {
  result: PropTypes.object.isRequired
};

export default connect(null, { createRepo })(Dropdown);
