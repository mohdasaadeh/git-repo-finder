import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Search from './Search';
import RepoList from './RepoList';
import '../css/styles.css';
import DeleteModal from './DeleteModal';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search />
                <RepoList />
              </>
            }
          />
          <Route
            path="/:id/delete"
            element={
              <>
                <Search />
                <RepoList />
                <DeleteModal />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
