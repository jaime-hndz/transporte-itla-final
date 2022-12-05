import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle';
import { AdminTravel } from '../../components/ControlComponents/AdminTravel';
import { CreateTravels } from '../../components/ControlComponents/CreateTravels';

export const AdminTravelsScreen = () => {
  return (
    <div>
      <PageTitle>Administrar viajes</PageTitle>
      <CreateTravels />
      <AdminTravel />
    </div>
  )
}
