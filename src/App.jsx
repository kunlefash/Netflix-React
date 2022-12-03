import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Watch from "./components/watch/Watch";


function App() {
  <div className='App'>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/home" element={ <Home />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/watch" element={ <Watch />} />
      <Route path="/register" element={ <Register />} />
    </Routes>
  </div>
}
export default App;