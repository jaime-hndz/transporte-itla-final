import React from 'react'
import { CreateSingleTravel } from '../../components/Control/CreateSingleTravel'
import { PageTitle } from '../../components/Utils/PageTitle'
import { NavToHome } from '../../components/Utils/NavTo/NavToHome';


export const AddTravelScreen = () => {

  return (
    <div>
      <PageTitle>Agregar un viaje</PageTitle>
      <NavToHome />
      <CreateSingleTravel />
    </div>
  )
}
