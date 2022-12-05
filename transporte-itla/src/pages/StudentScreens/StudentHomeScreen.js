import React from 'react'
import { TravelsTable } from '../../components/Tables/TravelsTable'
import { PageTitle } from '../../components/Utils/PageTitle';

export const StudentHomeScreen = () => {
  return (
    <>
      <PageTitle>Inicio estudiante</PageTitle>
      <TravelsTable />
    </>
  )
}
