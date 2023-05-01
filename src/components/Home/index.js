import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddData from '../AddData/container.js';
import Logout from '../Logout/container.js';
import Grid from '../Grid/container.js';

function Home(props) { 
  const {
    isAuthenticated = false
  } = props;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
        navigate("/")
    }
}
,[isAuthenticated, navigate]);

  return (
    <>
      <Logout />
      <AddData />
      <Grid />
    </>
  );
}

export default Home;