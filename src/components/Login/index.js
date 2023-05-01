import { 
    Container,
    CssBaseline,
    Box,
    Avatar,
    TextField,
    Typography,
         } from '@mui/material';
import { isEmpty } from 'lodash';
import CustomButton from '../shared/CustomButton';
import {
    useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Login(props) {
    const {
        isAuthenticated = false,
        login,
    } = props;
    const theme = createTheme();
    const [loginBtn, setLoginBtn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated && loginBtn) {
            navigate("/grid")
        }
        else (
            navigate("/")
        )
    }
    ,[isAuthenticated, loginBtn, navigate]);

    const handleSubmit = (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            setLoginBtn(true)
            login({email: formData.get('email'),password: formData.get('password')});
        };

    return (
        <> 
            <ThemeProvider theme={theme}>   
                <CssBaseline />
                    <Container maxWidth="xs">
                        <Box  
                            sx={{
                                display: 'flex',
                                marginTop: '25px',
                                p: 2, 
                                border: '1px solid grey',
                                alignItems: 'center',
                                flexDirection: 'column',
                                }}>
                            <Avatar sx={{ m: 1, bgcolor: 'info.light' }}>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Hello!!
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <CustomButton
                                type="submit"
                                fullWidth
                                disabled={loginBtn}
                                variant="contained"
                                label='LogIn'
                            >
                            </CustomButton>
                            </Box>
                        </Box>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Login;