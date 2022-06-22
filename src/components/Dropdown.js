import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createRepo } from '../actions';
import '../css/styles.css';

const Dropdown = ({ result, createRepo }) => {
  useEffect(() => {
    if (JSON.stringify(result) !== JSON.stringify({})) {
      document.querySelector('.dropdown').classList.add('active-block');
    }
  }, [result]);

  const handleSelection = event => {
    event.preventDefault();

    document.querySelector('.dropdown').classList.remove('active-block');

    createRepo(result);
  };

  const handleClose = event => {
    event.preventDefault();

    document.querySelector('.dropdown').classList.remove('active-block');
  };

  return (
    <div className="dropdown inactive">
      <div className="dropdown-close-btn">
        <a href="#" className="close-btn" onClick={() => handleClose(event)}>
          &times;
        </a>
      </div>
      <a href="#" onClick={() => handleSelection(event)}>
        <p className="dropdown-item">{result.full_name}</p>
      </a>
    </div>
  );
};

Dropdown.propTypes = {
  result: PropTypes.object.isRequired,
  createRepo: PropTypes.func.isRequired
};

export default connect(null, { createRepo })(Dropdown);
