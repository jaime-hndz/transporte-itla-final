import React from 'react'
import Cookies from "universal-cookie";

const cookies = new Cookies();
var usuario = cookies.get("usuario");

export const Balance = () => {
  return (
    <div>
      <h2>Su balance es de: RD$ {usuario.estudiantes[0].saldo}  </h2>
    </div>
  )
}
