import React from 'react';
import './App.css';
import nerd from './assests/images/nerd.jpg';
import TechList from './components/TechList';

function App() {
  return (
    <>
      <h1>Hello World! Nerd!</h1>
      <img src={nerd} alt='nerd' style={{ width: '100%' }} />
      <TechList />
    </>
  );
}

export default App;
