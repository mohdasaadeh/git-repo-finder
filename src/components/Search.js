import React, { useRef, useState } from 'react';
import axios from 'axios';

import Dropdown from './Dropdown';

const Search = () => {
  const [result, setResult] = useState('');

  const inputRef = useRef();

  const handleSearch = async () => {
    const { data } = await axios.get(
      `https://api.github.com/repos/${inputRef.current.value}`
    );

    setResult(data);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSearch}>Search</button>
      <Dropdown result={result} />
    </div>
  );
};

export default Search;
