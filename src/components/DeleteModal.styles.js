import React from 'react';
import PropTypes from 'prop-types';

const StyledDeleteModal = ({ modalRef, handleDelete, handleCancel }) => {
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

StyledDeleteModal.propTypes = {
  modalRef: PropTypes.any.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default StyledDeleteModal;
