
import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

const CreateConsultant = ({ onCreate }) => {
  const [formData, setFormData] = useState({ nom: '', prenom: '' , num: '' , spetialite:'' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);                   
    setFormData({ nom: '', prenom: '' , num: '' , spetialite:''  }); 
  };

  return (
    <Container>
      <h2>Create Consultant</h2>
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
          label="prenom"
          name="prenom"
          value={formData.email}
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
          label="spetialite"
          name="spetialite"
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

export default CreateConsultant;
