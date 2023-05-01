import { useEffect } from 'react';
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Logout(props) {
    const {
        isAuthenticated = false,
        logout
    } = props;

    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuthenticated) {
          navigate("/")
      } else {
        navigate("/home")
      }
  }
  ,[isAuthenticated, navigate]);

  const handleLogout = () => {
    if (isAuthenticated) {
        logout();
    }
  } 
  return (
    <Box sx={{
        display: 'flex',
        marginTop: '20px',
        alignItems: 'center',
        flexDirection: 'column',
        }}>
        <Button
            type="button"
            variant="contained"
            onClick={handleLogout}
            > 
            Logout
        </Button>
    </Box>
  )
}

export default Logout;