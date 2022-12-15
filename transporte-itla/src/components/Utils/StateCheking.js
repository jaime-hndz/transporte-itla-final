import CircularProgress from '@mui/material/CircularProgress';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';

export const StateCheking = ({state}) => {
  return (
    <div className='mi-auto'>
      <p>Estado:</p>
      {state === null ? <CircularProgress />: null}
      {state === true ? <MoodIcon fontSize='large' color='success' />: null}
      {state === false ? <MoodBadIcon fontSize='large' color='error' />: null}
    </div>
  )
}
