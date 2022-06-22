import React, { useRef, useState } from 'react';
import axios from 'axios';

import '../css/styles.css';
import Dropdown from './Dropdown';
import useComponentDismiss from '../hooks/useComponentDismiss';

const Search = () => {
  const [result, setResult] = useState({});

  const inputRef = useRef();
  const dropdownRef = useRef();

  useComponentDismiss(dropdownRef, () =>
    document.querySelector('.dropdown').classList.remove('active-block')
  );

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/repos/${inputRef.current.value}`
      );

      setResult(data);
    } catch (error) {
      setResult({
        error:
          "The repo wasn't found, please make sure to enter the full name then try again!"
      });
    }
  };

  return (
    <div className="search-container" ref={dropdownRef}>
      <div className="search-box">
        <input placeholder="Search a Repository" type="text" ref={inputRef} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Dropdown result={result} />
    </div>
  );
};

export default Search;
