import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle'
import { useLocation } from "react-router-dom";
import { ModifyTravelForm } from '../../components/Control/ModifyTravelForm';
import { NavToHome } from '../../components/Utils/NavTo/NavToHome';


export const ModifyTravelScreen = () => {

  const { state } = useLocation();

  return (
    <div>
      <PageTitle>Modificar viaje no. {state.viaje.idViaje} </PageTitle>
      <NavToHome />
      <ModifyTravelForm viaje={state.viaje} />
    </div>
  )
}