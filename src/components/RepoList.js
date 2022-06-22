import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepoCard from './RepoCard';

const RepoList = ({ repos }) => {
  const renderRepos = () => {
    const repoArray = Object.values(repos).map(repo => (
      <RepoCard key={repo.id} repo={repo} />
    ));

    return repoArray.sort(
      (a, b) => b.props.repo.addedAt - a.props.repo.addedAt
    );
  };

  return <div className="card-list">{renderRepos()}</div>;
};

RepoList.propTypes = {
  repos: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { repos: state.repos };
};

export default connect(mapStateToProps)(RepoList);
