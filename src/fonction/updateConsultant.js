
import React, { useState, useEffect } from 'react';
import { Button, TextField, Container } from '@mui/material';

const UpdateConsultant = ({ currentConsultant, onUpdate }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Populate the form with the current consultant's data when it changes
    setFormData(currentConsultant);
  }, [currentConsultant]);

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
      <h2>Update Consultant</h2>
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
          label="prenom"
          name="prenom"
          value={formData.email || ''}
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
          label="spetialite"
          name="spetialite"
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

export default UpdateConsultant;
