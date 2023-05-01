import { Typography } from '@mui/material';

function Labels(props) {
  const {
    label = '',
    component = 'h1',
    variant = 'h5'
  } = props;
  return (
    <div>
      <Typography 
        component={component} 
        variant={variant}>
         {label}
      </Typography>
    </div>
  )
}

export default Labels;