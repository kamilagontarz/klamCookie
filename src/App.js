import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" className = "twoColumns">

      <div  className = "leftColumn">
      <h1 className = "header"> klamCookie </h1>
      <ul className = "menuList">
        <li> <a href="#"> Kategorie </a> </li>
        <li> <a href="#"> Składniki </a> </li>
        <li> <a href="#"> Pory roku </a> </li>
        <li> <a href="#"> Podstawy diety naturalnej </a> </li>
        <li> <a href="#"> Wszystkie przepisy </a> </li>
        <li> <a href="#"> About </a> </li>
      </ul>
      </div>

      <div className = "rightColumn">
            <h1 className = "header"> Trolololo  </h1>
            <ul className = "menuList">
        <li> <a href="#"> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </a> </li>
        <li> <a href="#"> bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb </a> </li>
        <li> <a href="#"> ccccccccccccccccccccccccccccccccc </a> </li>
        <li> <a href="#"> ddddddddddddddddddddddddddddddddd </a> </li>
        <li> <a href="#"> eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</a> </li>
        <li> <a href="#"> ffffffffffffffffffffffffffffffffff </a> </li>
      </ul>
      </div>

    </div>
  );
}

export default App;
