import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.component";
import Home from "./components/home.component";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Home></Home>
        </div>
    );
}

export default App;
