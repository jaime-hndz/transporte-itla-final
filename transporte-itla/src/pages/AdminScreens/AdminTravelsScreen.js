import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle';
import { AdminTravel } from '../../components/Control/AdminTravel';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


export const AdminTravelsScreen = () => {

  let nav = useNavigate()
  return (
    <div>
      <PageTitle>Administrar viajes</PageTitle>
      <div style={{display: 'flex', marginBlock: '10px'}}>
        <Button variant='contained' endIcon={<AddBoxIcon />} onClick={() => nav('/agregarviaje')}>Agregar viaje</Button>
        &nbsp;
        <Button variant='contained' endIcon={<AddToPhotosIcon />}>Agregar viajes</Button>
      </div>
      <AdminTravel />
    </div>
  )
}
