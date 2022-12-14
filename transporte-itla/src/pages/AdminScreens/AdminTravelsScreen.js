import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle';
import { AdminTravel } from '../../components/Control/AdminTravel';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useNotification } from '../../context/notification.context';


export const AdminTravelsScreen = () => {

  let nav = useNavigate()

  const { getError } = useNotification()

  const Abrir = () =>{
    getError("Funciona","info")
  }
  return (
    <div>
      <PageTitle>Administrar viajes</PageTitle>
      <div style={{display: 'flex', marginBlock: '10px'}}>
        <Button style={{backgroundColor: '#0E6CB4'}} variant='contained' endIcon={<AddBoxIcon />} onClick={() => nav('/agregarviaje')}>Agregar viaje</Button>
        &nbsp;
        <Button style={{backgroundColor: '#0E6CB4'}} variant='contained' endIcon={<AddToPhotosIcon />} onClick={Abrir}>Agregar viajes</Button>
      </div>
      <AdminTravel />
    </div>
  )
}
