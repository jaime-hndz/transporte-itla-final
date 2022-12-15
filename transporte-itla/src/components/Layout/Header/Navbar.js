import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export const Navbar = ({options}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
        {options.map((opt) => (
          <Link key={opt.text} to={opt.path}>
            <MenuItem >
              <Typography className='navbar-typography'>{opt.text}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Box>
    </>
  )
}
