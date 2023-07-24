
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const GetAllConsultant = ({ consultantData }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>nom</TableCell>
          <TableCell>Prenom</TableCell>
          <TableCell>num</TableCell>
          <TableCell>spetialite</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {consultantData.map((consultant) => (
          <TableRow key={consultant.id}>
            <TableCell>{consultant.id}</TableCell>
            <TableCell>{consultant.nom}</TableCell>
            <TableCell>{consultant.prenom}</TableCell>
            <TableCell>{consultant.spetialite}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GetAllConsultant;
