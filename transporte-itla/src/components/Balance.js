import React from 'react'
import { usuario } from "../helpers/UserProvider";

export const Balance = () => {
  return (
    <div>
      <h2>Su balance es de: RD$ {usuario.estudiantes[0].saldo}  </h2>
    </div>
  )
}
