import React from 'react'
import { TicketsTable } from '../../components/Tables/TicketsTable'

export const PaidTicketsScreen = () => {
  return (
    <>
        <h1>Tickets pagos</h1>
        <TicketsTable pagos={true} />
    </>
  )
}
