import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle'
import { useLocation } from "react-router-dom";
import { CheckTravels } from '../../components/Control/CheckTravels'
import { NavToHome } from '../../components/Utils/NavTo/NavToHome';


export const CheckTravelsScreen = () => {

  const { state } = useLocation();

  return (
    <div>
      <PageTitle>Validando tickes del viaje no. {state.viaje.idViaje} </PageTitle>
      <NavToHome />
      <CheckTravels viaje={state.viaje} />
    </div>
  )
}
