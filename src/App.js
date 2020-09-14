import React from 'react';
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Book from './components/Book'
import Amenities from './components/Amenities'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      
     
    </div>
    </Router>
  );
}

export default App;
