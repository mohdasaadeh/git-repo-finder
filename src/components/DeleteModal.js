import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../css/styles.css';
import { deleteRepo } from '../actions';

const DeleteModal = ({ deleteRepo }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  const handleDelete = () => {
    deleteRepo(id);

    navigate('/');
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <p className="modal-message">
          Are you sure that you want to delete this repo?
        </p>
        <div className="modal-action">
          <button className="modal-btn" onClick={handleDelete}>
            Delete
          </button>
          <button className="modal-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteModal.propTypes = {
  deleteRepo: PropTypes.func.isRequired
};

export default connect(null, { deleteRepo })(DeleteModal);
