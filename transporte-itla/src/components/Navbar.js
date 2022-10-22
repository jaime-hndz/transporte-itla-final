import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({options}) => {
  return (
    <div style={{display: 'flex'}}>
        {options.map((opt, i) => {
            return(
                <Link to={opt.path} style={{textDecoration: 'none', color: 'black',margin: '30px'}} >
                  <p key={i}>{opt.text} {opt.icon}</p>
                </Link>
            )
        })}
    </div>
  )
}
