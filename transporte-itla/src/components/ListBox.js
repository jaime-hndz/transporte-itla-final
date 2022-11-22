import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const ListBox = ({label, options = []}) => {
  return (
    <div>
        <InputLabel>{label}</InputLabel>
        <Select>
            {options.map((opt, i) =>(
                <MenuItem key={i} value={10}>{opt.name}</MenuItem>
            ))}
        </Select>
    </div>
  )
}
