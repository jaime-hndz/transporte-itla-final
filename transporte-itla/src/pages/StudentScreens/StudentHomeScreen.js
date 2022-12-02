import React from 'react'
import { TravelsTable } from '../../components/Tables/TravelsTable'
import { PageTitle } from '../../components/PageTitle';

export const StudentHomeScreen = () => {
  return (
    <>
      <PageTitle>Inicio estudiante</PageTitle>
      <TravelsTable />
    </>
  )
}
