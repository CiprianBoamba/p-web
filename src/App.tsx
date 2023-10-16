import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import MyNavbar from './components/Navbar';

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <MyNavbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
