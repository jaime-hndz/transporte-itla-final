import React from 'react'

export const Navbar = ({options}) => {
  return (
    <div style={{display: 'flex'}}>
        {options.map((opt, i) => {
            return(
                <p key={i} style={{margin: '30px'}}>{opt.name}</p>
            )
        })}
    </div>
  )
}
