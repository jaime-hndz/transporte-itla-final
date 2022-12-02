import React from 'react'
import { TicketsTable } from '../../components/Tables/TicketsTable'
import { PageTitle } from '../../components/PageTitle';

export const PaidTicketsScreen = () => {
  return (
    <>
        <PageTitle>Tickets pagos</PageTitle>
        <TicketsTable pagos={true} />
    </>
  )
}
