import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import {fetchApi} from '../helpers/fetchApi'
import { TravelsTable } from './TravelsTable'

export const ViewTravels = () => {

  const [formValues, setformValues] = useState({
    fecha: null
  })
  const [viajes, setViajes] =  useState([])

  const handleChange = async (e) =>{
    await setformValues({
      ...formValues,
      [e.target.name] : e.target.value
        
    })
  }

  const handleSubmit = async (e) =>{

    console.log(formValues)
    e.preventDefault()
    await fetchApi("viajes/bydate", formValues)
    .then(response => {
      setViajes(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <h2>Viajes disponibles</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Input type="date" onChange={handleChange} required name='fecha'/>
        </div>
        <div>
          <Button variant="contained" type="submit">Ver viajes disponibles</Button>
        </div>
      </form>
      <TravelsTable viajes={viajes} />

    </>
  )
}
