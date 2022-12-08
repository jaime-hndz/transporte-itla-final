import React from 'react'
import { CreateSingleTravel } from '../../components/Control/CreateSingleTravel'
import { PageTitle } from '../../components/Utils/PageTitle'
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';


export const AddTravelScreen = () => {

  let nav = useNavigate()
  return (
    <div>
        <PageTitle>Agregar un viaje</PageTitle>
        <div style={{display: 'flex', marginBlock: '10px'}}>
            <Button variant='contained' startIcon={<ArrowBackIcon />} onClick={() => nav('/administrar')}>Volver</Button>
        </div>
        <CreateSingleTravel />
    </div>
  )
}
