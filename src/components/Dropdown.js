import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ result }) => {
  const handleClick = () => {
    console.log(result);
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

export default Dropdown;
