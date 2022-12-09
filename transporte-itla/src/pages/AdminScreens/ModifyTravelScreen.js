import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle'
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { ModifyTravelForm } from '../../components/Control/ModifyTravelForm';


export const ModifyTravelScreen = () => {

  const { state } = useLocation();

  let nav = useNavigate()
  return (
    <div>
        <PageTitle>Modificar viaje no. {state.viaje.idViaje} </PageTitle>
        <div style={{display: 'flex', marginBlock: '10px'}}>
            <Button variant='contained' startIcon={<ArrowBackIcon />} onClick={() => nav('/administrar')}>Volver</Button>
        </div>
        <ModifyTravelForm viaje={state.viaje} />
    </div>
  )
}