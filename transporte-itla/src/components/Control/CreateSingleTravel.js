import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Input, InputLabel } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

export const CreateSingleTravel = () => {
  const [formValues, setformValues] = useState({
    idruta: 0,
  });

  const handleChange = async (e) => {
    console.log(e.target.value);
    await setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <FormControl fullWidth>    
        <InputLabel id="ruta-label">Ruta</InputLabel>
        <Select
          labelId="ruta-label"
          id="idruta"
          value={formValues.idruta}
          label="Ruta"
          onChange={handleChange}
        >
          <MenuItem value={0}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <InputLabel id="ruta-label">Ruta</InputLabel>
        <Select
          labelId="ruta-label"
          id="idruta"
          value={formValues.idruta}
          label="Ruta"
          onChange={handleChange}
        >
          <MenuItem value={0}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <InputLabel id="ruta-label">Ruta</InputLabel>
        <Select
          labelId="ruta-label"
          id="idruta"
          value={formValues.idruta}
          label="Ruta"
          onChange={handleChange}
        >
          <MenuItem value={0}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <InputLabel id="ruta-label">Ruta</InputLabel>
        <Select
          labelId="ruta-label"
          id="idruta"
          value={formValues.idruta}
          label="Ruta"
          onChange={handleChange}
        >
          <MenuItem value={0}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <Input labelId='fecha-label' type="date" onChange={handleChange} required name="fecha" /> */}
      </FormControl>
    </div>
  );
};
