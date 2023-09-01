import React from 'react';
import AppNavbar from './components/AppNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
    {/* <AppNavbar/>
    <Home/> */}
    <BrowserRouter>
    <AppNavbar/>
    <Routes>
      <Route exact path='/' Component={Home}/>
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
