import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle';
import { AdminTravelTable } from '../../components/Tables/AdminTravelTable';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export const AdminHomeScreen = () => {
  let nav = useNavigate()
  return (
    <div>
      <PageTitle>Administrar viajes</PageTitle>
      <div style={{display: 'flex', marginBlock: '10px'}}>
        <Button style={{backgroundColor: '#0E6CB4'}} variant='contained' endIcon={<AddBoxIcon />} onClick={() => nav('/agregarviaje')}>Agregar viaje</Button>
        &nbsp;
        <Button style={{backgroundColor: '#0E6CB4'}} variant='contained' endIcon={<AddToPhotosIcon />}>Agregar viajes</Button>
      </div>
      <AdminTravelTable />
    </div>
  )
}
