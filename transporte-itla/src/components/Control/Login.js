import { useState } from 'react';
import {Button} from '@mui/material'
import md5 from 'md5';
import Cookies from 'universal-cookie';
import {fetchApi} from '../../helpers/fetchApi'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Lock } from '@mui/icons-material';
import { InputCustom } from '../Utils/InputCustom';
import { useNotification } from '../../context/notification.context';

const cookies = new Cookies();

export const Login = () => {

  const { getNotification } = useNotification()
 
  const [formValues, setformValues] = useState({
    user: '',
    pass: ''
  })

  const handleChange = async (e) =>{
    await setformValues({
      ...formValues,
      [e.target.name] : e.target.value
        
    })
  }

  const handleLogin = async (e) =>{

    e.preventDefault()
      await fetchApi("usuarios/auth", {
        nombre: formValues.user,
        contra: md5(formValues.pass),
      })
      .then(response => {
        cookies.set('usuario', response.data, {path: '/'})
        window.location.href="./"
      })
      .catch((error) => {
        getNotification("Ha ocurrido error con el inicio de sesión", "error")
        console.log(error);
      });
  }


  return (
    <form
      method="post"
      id="modified"
      autoComplete="false"
      onSubmit={handleLogin}
    >
      <InputCustom
        label={"Correo electrónico"}
        name={"user"}
        type={"text"}
        icon={<AccountCircle />}
        handler={handleChange}
      />
      <InputCustom
        label={"Contraseña"}
        name={"pass"}
        type={"password"}
        icon={<Lock />}
        handler={handleChange}
      />

      <div style={{ marginBottom: "20px", textAlign: "right" }}>
        <Button type="submit" variant="contained" size="large">
          Entrar
        </Button>
      </div>
    </form>
  );
};
