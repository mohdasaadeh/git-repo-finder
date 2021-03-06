import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/styles.css';

const RepoCard = ({ repo }) => {
  const {
    id,
    html_url,
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
          <a href={html_url}>
            <span>{full_name}</span>
          </a>
        </div>
        <img src={owner.avatar_url} />
      </div>
      <div className="card-item">
        <span>Stars: </span>
        {stargazers_count}
      </div>
      <div className="card-item">
        <span>Forks: </span>
        {forks_count}
      </div>
      <div className="card-item">
        <span>Open Issues: </span>
        {open_issues_count}
      </div>
      <div className="card-item">
        <span>Created At: </span>
        {dateConverter(created_at)}
      </div>
      <div className="card-item">
        <span>Updated At: </span>
        {dateConverter(updated_at)}
      </div>
      <div className="card-item">
        <span>Language: </span>
        {language}
      </div>
      <div className="card-item">
        <span>License: </span>
        {license.spdx_id}
      </div>
      <div className="card-action">
        <Link to={`/${id}/delete`}>
          <button className="card-btn">Delete</button>
        </Link>
      </div>
    </div>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoCard;
