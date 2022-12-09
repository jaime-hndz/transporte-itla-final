import React from 'react'
import { CheckTravels } from '../../components/Control/CheckTravels'
import {PageTitle} from '../../components/Utils/PageTitle'

export const CheckTravelsScreen = () => {
  return (
    <div>
        <PageTitle>Validar viajes</PageTitle>
        <CheckTravels />
    </div>
  )
}
