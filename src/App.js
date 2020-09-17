import React from 'react';
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Book from './components/Book'
import Amenities from './components/Amenities'
import Reservation from './components/Reservation'
import Explore from './components/Explore'
import EditReservation from './components/EditReservation'

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
