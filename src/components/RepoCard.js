import React from 'react';
import PropTypes from 'prop-types';

import '../css/styles.css';

const RepoCard = ({ repo }) => {
  const {
    full_name,
    owner,
    stargazers_count,
    forks_count,
    open_issues_count,
    created_at,
    updated_at,
    language,
    license
  } = repo;

  const dateConverter = timestamp => {
    const date = new Date(timestamp);

    return (
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    );
  };

  return (
    <div className="card">
      <div className="card-item">
        <div>
          <span>{full_name}</span>
        </div>
        <img src={owner.avatar_url} />
      </div>
      <div>
        <span>Stars: </span>
        {stargazers_count}
      </div>
      <div>
        <span>Forks: </span>
        {forks_count}
      </div>
      <div>
        <span>Open Issues: </span>
        {open_issues_count}
      </div>
      <div>
        <span>Created At: </span>
        {dateConverter(created_at)}
      </div>
      <div>
        <span>Updated At: </span>
        {dateConverter(updated_at)}
      </div>
      <div>
        <span>Language: </span>
        {language}
      </div>
      <div>
        <span>License: </span>
        {license.spdx_id}
      </div>
      <div className="card-item">
        <button className="card-btn">Delete</button>
      </div>
    </div>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoCard;
