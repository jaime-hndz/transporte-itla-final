import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Input, InputLabel } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { Button } from '@mui/material';
import { fetchApi } from "../../helpers/fetchApi";
import moment from "moment";
import { useNotification } from '../../context/notification.context';

export const ModifyTravelForm = ({viaje}) => {
  const [formValues, setformValues] = useState(viaje);
  const { getNotification } = useNotification()

  console.log(viaje)

  const handleChange = async (e) => {
    console.log(e.target.value);
    await setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const Submit = async () => {
    await fetchApi(`viajes/${formValues.idViaje}`, formValues, 'PUT')
    .then((response) => {
      getNotification("Modificado correctamente", "success")
      console.log(response)
        
    })
    .catch((error) => {
      getNotification("Ha ocurrido error", "error")
      console.log(error);
    })
  }

  return (
    <Box sx={{ minWidth: 120, marginBlock: 3 }}>
      <FormControl fullWidth style={{marginBlock: '10px'}} size="small" >    
        <InputLabel id="ruta-label">Ruta</InputLabel>
        <Select
          labelid="ruta-label"
          id="idruta"
          value={formValues.idRuta}
          label="Ruta"
          name="idRuta"
          onChange={e => handleChange(e)}
        >
          <MenuItem value={1}>(27)Pintura-ITLA</MenuItem>
          <MenuItem value={2}>(Charles)Villa Mella-ITLA</MenuItem>
          <MenuItem value={3}>(Este)San Pedro-ITLA</MenuItem>
          <MenuItem value={4}>ITLA-(27)Pintura</MenuItem>
          <MenuItem value={5}>ITLA-(Charles)Villa Mella</MenuItem>
          <MenuItem value={6}>ITLA-(Este)San Pedro</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth style={{marginBlock: '10px'}} size="small">
        <InputLabel id="horario-label">Horario</InputLabel>
        <Select
          labelid="horario-label"
          id="idhorario"
          value={formValues.idHorario}
          label="Horario"
          name="idHorario"
          onChange={e => handleChange(e)}
        >
          <MenuItem value={1}>8:00 AM</MenuItem>
          <MenuItem value={2}>9:00 AM</MenuItem>
          <MenuItem value={3}>10:00 AM</MenuItem>
          <MenuItem value={4}>1:00 PM</MenuItem>
          <MenuItem value={5}>2:00 PM</MenuItem>
          <MenuItem value={6}>4:00 PM</MenuItem>
          <MenuItem value={7}>6:00 PM</MenuItem>
          <MenuItem value={8}>8:00 PM</MenuItem>
          <MenuItem value={9}>8:30 PM</MenuItem>
          <MenuItem value={10}>10:00 PM</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth style={{marginBlock: '10px'}} size="small">
        <InputLabel id="cantidad-label">Cantidad de cupos</InputLabel>
        <Select
          labelid="cantidad-label"
          id="idcantidad"
          value={formValues.idCantidadCupos}
          label="Cantidad de cupos"
          name="idCantidadCupos"
          onChange={e => handleChange(e)}
        >
          <MenuItem value={1}>Estándar(60)</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth style={{marginBlock: '10px'}}>
        <Input defaultValue={moment(formValues.fecha).utc().format("yyyy-MM-DD")} labelid='fecha-label' type="date" onChange={handleChange} required name="fecha" />
      </FormControl>

      <FormControl fullWidth style={{marginBlock: '10px'}}>
      <Button variant="outlined" onClick={Submit}>Editar</Button>
      </FormControl>
    </Box>
  );
};
