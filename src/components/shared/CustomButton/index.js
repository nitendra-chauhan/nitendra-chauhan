import { 
    Button
    } from '@mui/material';

function CustomButton(props) {
    const {
        label = '',
        type = '',
        fullWidth = true,
        variant = '',
        disabled = false,
        marginTop = 3,
        marginBottom = 2,
        } = props;
  return (
    <>
        <Button 
            type={type}
            fullWidth={fullWidth}
            variant={variant}
            disabled={disabled}
            sx={{ mt: marginTop, mb: marginBottom }}
            >  
            {label}
        </Button>
    </>
  )
}

export default CustomButton;
