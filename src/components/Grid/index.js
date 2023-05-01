import { useEffect, useState } from 'react';
import { isEqual } from 'lodash';
import Table from '@mui/material/Table';
import CircularProgress from '@mui/material/CircularProgress';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function Grid(props) {
  const {
    isLoading = false,
    users = [{}],
    userDataLoading, 
    deleteUserData
  } = props;
  
  const [usersDataInState, setUsersDataInState] = useState([{}]);

  useEffect(() => {
    userDataLoading();
  }, []);

  useEffect(() => {
    if (!isEqual(usersDataInState, users)) {
      setUsersDataInState(users)
    }
  }, [users]);

const handleDelete = (id) => {
  deleteUserData(id, usersDataInState)
}

  return (
    <>
    <TableContainer component={Paper}> 
      <Table sx={{  margin: 'auto',
                    marginTop: '50px',
                    maxWidth: '650px',
                    border: '1px solid grey', 
                }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">name</TableCell>
            <TableCell align="left">username</TableCell>
            <TableCell align="left">email</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading? 
            <CircularProgress /> :
          usersDataInState && usersDataInState.map(({id = '', name = '', username = '', email = ''}) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell align="left">{name}</TableCell>
              <TableCell align="left">{username}</TableCell>
              <TableCell align="left">{email}</TableCell>
              <TableRow align='center'>
                  <Button
                    type="button"
                    variant="contained"
                    sx={{ m: 2 }}
                    onClick={() => handleDelete(id)}>
                       Delete
                  </Button>
                </TableRow>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default Grid;