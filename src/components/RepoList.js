import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepoCard from './RepoCard';

const RepoList = ({ repos }) => {
  const renderRepos = () => {
    return Object.values(repos).map(repo => (
      <RepoCard key={repo.id} repo={repo} />
    ));
  };

  return renderRepos();
};

RepoList.propTypes = {
  repos: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { repos: state.repos };
};

export default connect(mapStateToProps)(RepoList);
