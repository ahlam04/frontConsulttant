import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

const CreateEntreprise = ({ onCreate }) => {
  const [formData, setFormData] = useState({ nom: '',  num: '' , adresse:'' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);                    
    setFormData({ nom: '',  num: '' , adresse:'' }); 
  };

  return (
    <Container>
      <h2>Create Entreprise</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="nom"
          name="nom"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        
         <TextField
          label="num"
          name="num"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
         <TextField
          label="adresse"
          name="adresse"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
    </Container>
  );
};

export default CreateEntreprise;
