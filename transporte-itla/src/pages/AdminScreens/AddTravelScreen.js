import React from 'react'
import { CreateSingleTravelForm } from '../../components/Control/CreateSingleTravelForm'
import { PageTitle } from '../../components/Utils/PageTitle'
import { NavToHome } from '../../components/Utils/NavTo/NavToHome';


export const AddTravelScreen = () => {

  return (
    <div>
      <PageTitle>Agregar un viaje</PageTitle>
      <NavToHome />
      <CreateSingleTravelForm />
    </div>
  )
}
