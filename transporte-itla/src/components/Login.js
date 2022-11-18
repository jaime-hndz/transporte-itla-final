import { useEffect, useState } from 'react';
import {Input, Button} from '@mui/material'
import { BaseUrl } from '../helpers/BaseUrl';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Login = () => {
 
  const [formValues, setformValues] = useState({
    user: '',
    pass: ''
  })

  useEffect(() => {
    if (cookies.get('usuario')) {
      window.location.href="./"
    }
  }, [])
  

  const handleChange = async (e) =>{
    await setformValues({
      ...formValues,
      [e.target.name] : e.target.value
        
    })
  }

  const handleLogin = async (e) =>{

    e.preventDefault()
    await axios
      .get(BaseUrl + "usuarios/auth", {
        params: {
          nombre: formValues.user,
          contra: md5(formValues.pass),
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        cookies.set('usuario', response.data, {path: '/'})
        alert(`Bienvenido/a ${response.data.email}`)
        window.location.href="./"
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <form
      method="post"
      id="modified"
      autoComplete='false'
      onSubmit={handleLogin}
    >
      <label htmlFor="posicion">Usuario</label>
      <div className="form-group input-group">
        <span className="input-group-addon">
        </span>
        <Input
          type="text"
          name="user"
          className="form-control"
          placeholder="Usuario"
          onChange={handleChange}
        />
      </div>
      <label htmlFor="pass">Contraseña</label>
      <div>
        <Input
          type="password"
          name="pass"
          id="pass"
          className="form-control"
          placeholder="Contraseña"
          onChange={handleChange}

        />
      </div>
      <p>
        <Button type="submit" >
          Entrar
        </Button>
      </p>
    </form>
  );
};
