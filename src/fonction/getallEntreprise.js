import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const GetAllEntreprise = ({ EntrepriseData }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>nom</TableCell>
          <TableCell>num</TableCell>
          <TableCell>adresse</TableCell>
         
          
        </TableRow>
      </TableHead>
      <TableBody>
        {EntrepriseData.map((Entreprise) => (
          <TableRow key={Entreprise.id}>
            <TableCell>{Entreprise.id}</TableCell>
            <TableCell>{Entreprise.nom}</TableCell>
            <TableCell>{Entreprise.prenom}</TableCell>
            <TableCell>{Entreprise.specialite}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GetAllEntreprise;
