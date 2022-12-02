import React from 'react'
// import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export const Navbar = ({options,pages}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
        {pages.map((page) => (
          <MenuItem key={page}>
            <Typography textAlign="center" style={{color: '#0E6CB4'}}>{page}</Typography>
          </MenuItem>
        ))}
      </Box>
      {/* <div className='navbar'>
          {options.map((opt, i) => {
              return(
                  <Link to={opt.path} className='navbar-option' key={i} >
                    <div>{opt.text}</div>
                    <div>{opt.icon}</div> 
                  </Link>
              )
          })}
      </div>   */}
    </>
  )
}
