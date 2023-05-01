import { Routes, Route } from 'react-router-dom';
import Login from './Login/container.js'
import Home from './Home/container.js'

function Routers() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default Routers;