import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const DeleteEntreprise = ({ open, Entreprise, onDelete, onClose }) => {
  const handleDelete = () => {
    onDelete(Entreprise.id); 
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Entreprise Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete "{Entreprise.nom}"?
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

export default DeleteEntreprise;