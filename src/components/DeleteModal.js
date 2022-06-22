import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../css/styles.css';
import { deleteRepo } from '../actions';
import useComponentDismiss from '../hooks/useComponentDismiss';

const DeleteModal = ({ deleteRepo }) => {
  const modalRef = useRef();

  const { id } = useParams();

  const navigate = useNavigate();

  useComponentDismiss(modalRef, () => navigate('/'));

  const handleCancel = () => {
    navigate('/');
  };

  const handleDelete = () => {
    deleteRepo(id);

    navigate('/');
  };

  return (
    <div className="modal">
      <div className="modal-box" ref={modalRef}>
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
