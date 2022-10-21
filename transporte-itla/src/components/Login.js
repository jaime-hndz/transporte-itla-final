import { useState } from 'react';
import {Input, Button} from '@mui/material'

export const Login = () => {

  
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

  const handleLogin = (e) =>{

    /*
    
      AQUí VA LA LóGICA DEL LOGIN
    
    
    */
    e.preventDefault()
    if(formValues.user === 'jaime' && formValues.pass === '1'){
      window.location.href="./Home"
    }else{
      alert("El usuario o la contraseña no son correctas")
    }
  }


  return (
    <form
      method="post"
      id="modified"
      autoComplete='false'
      onSubmit={handleLogin}
    >
      <label for="posicion">Usuario</label>
      <div class="form-group input-group">
        <span class="input-group-addon">
        </span>
        <Input
          type="text"
          name="user"
          class="form-control"
          placeholder="Usuario"
          onChange={handleChange}
        />
      </div>
      <label for="pass">Contraseña</label>
      <div>
        <Input
          type="password"
          name="pass"
          id="pass"
          class="form-control"
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
