import {TextField, InputAdornment} from '@mui/material'


export const InputCustom = ({name,label,type, icon, handler}) => {
  return (
    <div>

        <TextField
            type={type}
            label={label}
            name={name}
            size='small'
            className="form-control"
            onChange={handler}
            style={{width: '100%', marginBottom:'20px'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {icon}
                </InputAdornment>
              ),
            }}
            variant="outlined"
        />
    </div>
  )
}
