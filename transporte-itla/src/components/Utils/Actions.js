import React from 'react'
import { CheckT } from '../Control/CheckT'
import { DeleteTravel } from '../Control/DeleteTravel'
import { ModifyTravel } from '../Control/ModifyTravel'
export const Actions = ({viaje}) => {
  return (
    <div>
      <ModifyTravel viaje={viaje} />
      <DeleteTravel id={viaje.idViaje} />
      <CheckT viaje={viaje} />
    </div>
  )
}
