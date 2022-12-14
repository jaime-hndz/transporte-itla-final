import { Button } from '@mui/material'
import React from 'react'
import { PageTitle } from '../components/Utils/PageTitle'
import { useNavigate } from "react-router-dom";

export const NotFoundScreen = () => {
  let nav = useNavigate()
  return (
    <div>
        <PageTitle>Página no encontrada </PageTitle>
        <div style={{display:'flex'}}>
            <Button onClick={() => nav('/')} >Volver al inicio</Button>
        </div>
    </div>
  )
}
