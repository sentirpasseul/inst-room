import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path='/' element={ <HomePage /> }></Route>
    </Routes>
  );
}

export default App;
