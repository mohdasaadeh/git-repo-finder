import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createRepo } from '../actions';
import '../css/styles.css';

const Dropdown = ({ result, createRepo }) => {
  useEffect(() => {
    if (JSON.stringify(result) !== JSON.stringify({})) {
      document.querySelector('.dropdown').classList.add('active-block');

      if (result['error']) {
        document
          .querySelector('.dropdown-item')
          .classList.remove('dropdown-item-result');
        document
          .querySelector('.dropdown-item')
          .classList.add('dropdown-item-error');
      } else {
        document
          .querySelector('.dropdown-item')
          .classList.remove('dropdown-item-error');
        document
          .querySelector('.dropdown-item')
          .classList.add('dropdown-item-result');
      }
    }
  }, [result]);

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
    <div className="dropdown inactive">
      <div className="dropdown-close-btn">
        <a
          href="#"
          className="close-btn dropdown-item-result"
          onClick={() => handleClose(event)}
        >
          &times;
        </a>
      </div>
      <a
        href="#"
        onClick={() => handleSelection(event)}
        className="dropdown-item dropdown-item-result"
      >
        <p className="dropdown-item-p">{result.full_name || result.error}</p>
      </a>
    </div>
  );
};

Dropdown.propTypes = {
  result: PropTypes.object.isRequired,
  createRepo: PropTypes.func.isRequired
};

export default connect(null, { createRepo })(Dropdown);
