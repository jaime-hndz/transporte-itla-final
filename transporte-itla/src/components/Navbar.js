import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({options}) => {
  return (
    <div className='navbar'>
        {options.map((opt, i) => {
            return(
                <Link to={opt.path} className='navbar-option' key={i} >
                  <div>{opt.text}</div>
                  <div>{opt.icon}</div> 
                </Link>
            )
        })}
    </div>
  )
}
