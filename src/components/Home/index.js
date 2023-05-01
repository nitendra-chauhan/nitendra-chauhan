import { Routes, Route } from 'react-router-dom';
import Login from '../Login/container.js'
import Grid from '../Grid/index.js';

function Home() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/grid" element={<Grid />}></Route>
      </Routes>
    </>
  );
}

export default Home;