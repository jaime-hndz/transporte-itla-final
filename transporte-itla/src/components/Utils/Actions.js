import React from 'react'
import { NavToCheck } from './NavTo/NavToCheck'
import { DeleteTravel } from '../Control/DeleteTravel'
import { NavToModifyTravel } from './NavTo/NavToModifyTravel'
export const Actions = ({viaje}) => {
  return (
    <div>
      <NavToModifyTravel viaje={viaje} />
      <DeleteTravel id={viaje.idViaje} />
      <NavToCheck viaje={viaje} />
    </div>
  )
}
