import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle';
import { AdminTravel } from '../../components/Control/AdminTravel';
import { CreateTravels } from '../../components/Control/CreateTravels';

export const AdminTravelsScreen = () => {
  return (
    <div>
      <PageTitle>Administrar viajes</PageTitle>
      <CreateTravels />
      <AdminTravel />
    </div>
  )
}
