
import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const DeleteConsultant = ({ open, consultant, onDelete, onClose }) => {
  const handleDelete = () => {
    onDelete(consultant.id); // Pass the consultant ID to the parent component for handling the delete operation
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Consultant Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete "{consultant.nom}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConsultant;
