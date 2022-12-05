import React from 'react'
import { TicketsTable } from '../../components/Tables/TicketsTable'
import { PageTitle } from '../../components/Utils/PageTitle';

export const RequestsScreen = () => {
  return (
    <>
      <PageTitle>Solicitudes de tickets por pagar</PageTitle>
      <TicketsTable />
    </>
  )
}

