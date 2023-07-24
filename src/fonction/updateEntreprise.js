import React, { useState, useEffect } from 'react';
import { Button, TextField, Container } from '@mui/material';

const UpdateEntreprise = ({ currentEntreprise, onUpdate }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    
    setFormData(currentEntreprise);
  }, [currentEntreprise]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData); // Pass the updated form data to the parent component for handling update operation
  };

  return (
    <Container>
      <h2>Update Entreprise</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="nom"
          name="nom"
          value={formData.name || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
       
         <TextField
          label="num"
          name="num"
          value={formData.email || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
         <TextField
          label="adresse"
          name="adresse"
          value={formData.email || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </form>
    </Container>
  );
};

export default UpdateEntreprise;