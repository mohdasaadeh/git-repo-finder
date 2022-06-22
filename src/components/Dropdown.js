import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createRepo } from '../actions';
import '../css/styles.css';
import StyledDropdown from './Dropdown.styles';

const Dropdown = ({ result, createRepo }) => {
  const handleSelection = event => {
    event.preventDefault();

    if (!result['error']) {
      document.querySelector('.dropdown').classList.remove('active-block');

      createRepo(result);
    }
  };

  const handleClose = event => {
    event.preventDefault();

    document.querySelector('.dropdown').classList.remove('active-block');
  };

  return (
    <StyledDropdown
      result={result}
      handleClose={handleClose}
      handleSelection={handleSelection}
    />
  );
};

Dropdown.propTypes = {
  result: PropTypes.object.isRequired,
  createRepo: PropTypes.func.isRequired
};

export default connect(null, { createRepo })(Dropdown);
