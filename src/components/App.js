import React from 'react';

import Search from './Search';
import RepoList from './RepoList';
import '../css/styles.css';

function App() {
  return (
    <div>
      <Search />
      <div className="card-list">
        <RepoList />
      </div>
    </div>
  );
}

export default App;
