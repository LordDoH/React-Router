import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Pricing from './components/Pricing';
import About from './components/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

