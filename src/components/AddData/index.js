import { 
  Container,
  CssBaseline,
  Box,
  Avatar,
  Button,
  TextField,
  Typography,
       } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function AddData(props) {
  const {
    user: {
      email = ''
    } = {},
    users = [{}],
    addUserData,
  } = props;
  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    addUserData({ id: formData.get('id'),
                  name: formData.get('name'),
                  username: formData.get('username'),
                  email: formData.get('email'),
              }, users);
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
                                Width: '650' ,
                                border: '1px solid grey',
                                alignItems: 'center',
                                flexDirection: 'column',
                                }}>
                            <Avatar sx={{ m: 1, bgcolor: 'info.light' }}>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                               Hello!! {email}
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="id"
                                label="id"
                                name="id"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                            />
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
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                            > 
                            Add User
                            </Button>
                            </Box>
                        </Box>
                </Container>
            </ThemeProvider>
        </>
  )
}

export default AddData;