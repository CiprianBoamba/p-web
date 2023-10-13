import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-tailwind/react';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
      <Button>Button</Button>
    </div>
  );
}

export default App;
