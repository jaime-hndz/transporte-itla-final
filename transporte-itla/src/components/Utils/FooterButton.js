import React from 'react'
import { Button } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const FooterButton = ({children, texto, onClick}) => {
  return (
    <div className='footerButton'>
        {texto ? <div className='footerLegend'>{texto}</div> : null}
        <Button variant='contained' endIcon={<ArrowRightIcon />} onClick={onClick}>{children}</Button>
    </div>
  )
}
