import React from 'react'
import {StudentOptions, AdminOptions } from '../data/NavbarOptions.js'
import { Navbar } from './Navbar.js'
import logo from "../resources/itla-transporte.svg";

var usuario = {
    nombre: 'Jaime Hernandez',
    saldo: '25',
    tipo: 'student'
}

export const Header = () => {

  return (
    <div style={{display: 'flex', backgroundColor: 'white'}}>;
        <div>
            <img src={logo} alt='logo'/>
        </div>
        <Navbar options={usuario.tipo === "student" ? StudentOptions : AdminOptions} />
        <p>{usuario.nombre}</p>
        <p>Balance RD$ {usuario.saldo}</p>
    </div>
  )
}
