import React from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div>
      <div>
        {full_name}
        <img src={owner.avatar_url} />
      </div>
      <div>Stars: {stargazers_count}</div>
      <div>Forks: {forks_count}</div>
      <div>Open Issues: {open_issues_count}</div>
      <div>Created At: {created_at}</div>
      <div>Updated At: {updated_at}</div>
      <div>Language: {language}</div>
      <div>License: {license.spdx_id}</div>
      <button>Delete</button>
    </div>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoCard;
