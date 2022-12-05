import React from 'react'
import { PageTitle } from '../../components/PageTitle';
import { AdminTravel } from '../../components/AdminTravel';
import { CreateTravels } from '../../components/CreateTravels';

export const AdminTravelsScreen = () => {
  return (
    <div>
      <PageTitle>Administrar viajes</PageTitle>
      <CreateTravels />
      <AdminTravel />
    </div>
  )
}
