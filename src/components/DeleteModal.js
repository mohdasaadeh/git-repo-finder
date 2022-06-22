import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../css/styles.css';
import { deleteRepo } from '../actions';
import useComponentDismiss from '../hooks/useComponentDismiss';
import StyledDeleteModal from './DeleteModal.styles';

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
    <StyledDeleteModal
      modalRef={modalRef}
      handleCancel={handleCancel}
      handleDelete={handleDelete}
    />
  );
};

DeleteModal.propTypes = {
  deleteRepo: PropTypes.func.isRequired
};

export default connect(null, { deleteRepo })(DeleteModal);
