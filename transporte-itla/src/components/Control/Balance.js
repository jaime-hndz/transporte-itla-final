import React, {useState, useEffect} from 'react'
import { Button } from '@mui/material';
import Cookies from "universal-cookie";
import { usuario } from "../../helpers/UserProvider";
import { fetchApi } from "../../helpers/fetchApi";
import { useNotification } from '../../context/notification.context';

const cookies = new Cookies();

export const Balance = () => {

  const [saldo, setSaldo] = useState(0)
  const { getNotification } = useNotification()

  useEffect(() => {
    setSaldo(usuario.estudiantes[0].saldo)
  }, [])
  

  const Recargar = async () =>{
    
    
    const valor = 25
    console.log(usuario.estudiantes[0])
    /* - LOGICA DE RECARGAR - */
    await fetchApi(`estudiantes/recargar/${usuario.estudiantes[0].idEstudiante}/${valor}`,null,'PUT')
    .then((response) => {
        console.log(response)
        usuario.estudiantes[0].saldo = usuario.estudiantes[0].saldo + valor
        cookies.remove('usuario', {path: '/'})
        cookies.set('usuario', usuario, {path: '/'})
        window.location.reload()
    })
    .catch((error) => {
      getNotification("Ha ocurrido error al recargar", "error")
    console.log(error);
    })


  }

  return (
    <div>
      <h2>Su balance es de: RD$ {saldo}  </h2>
      <Button color='success' onClick={Recargar} variant='outlined'>Recargar saldo</Button>
    </div>
  )
}
