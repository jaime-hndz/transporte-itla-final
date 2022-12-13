import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle'
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { CheckTravels } from '../../components/Control/CheckTravels'


export const CheckTravelsScreen = () => {

  const { state } = useLocation();

  let nav = useNavigate()
  return (
    <div>
        <PageTitle>Validando tickes del viaje no. {state.viaje.idViaje} </PageTitle>
        <div style={{display: 'flex', marginBlock: '10px'}}>
            <Button variant='contained' style={{backgroundColor: '#0E6CB4'}}  startIcon={<ArrowBackIcon />} onClick={() => nav('/administrar')}>Volver</Button>
        </div>
        <CheckTravels viaje={state.viaje} />
    </div>
  )
}
