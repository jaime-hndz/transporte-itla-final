import React from "react";
import { Button } from "@mui/material";
import { fetchApi } from "../helpers/fetchApi";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { usuario } from "../helpers/UserProvider";

const cookies = new Cookies();

export const PayTickets = ({ total, tickets, estudiante }) => {

  let nav = useNavigate()
  const Pagar = async () =>{
    if(estudiante.saldo < total){
      if (window.confirm('No bro, no tienes plata. ¿Quieres ir a recargar tu saldo?')) {
        nav('/saldo')
      }
    }else{
        tickets.forEach(element => {
            element.idEstadoTicketNavigation = null
            element.idViajeNavigation = null
            element.idEstudianteNavigation = null
            element.idEstadoTicket = 2
        });
        await fetchApi(`tickets/pagartickets/${estudiante.idEstudiante}/${total}`, tickets, 'PUT')
        .then((response) => {
            console.log(response)
            usuario.estudiantes[0].saldo = response.data
            cookies.remove('usuario', {path: '/'})
            cookies.set('usuario', usuario, {path: '/'})
        })
        .catch((error) => {
        console.log(error);
        })
    }

  }
  return (
    <>
      <div>Total a pagar: RD$ {total}</div>
      <Button variant="contained" onClick={Pagar}>Pagar viajes</Button>
    </>
  );
};
