import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Book from './Book'
import Home from './Home'
import Suites from './Suites'
import Contact from './Contact'
import Map from './Map'
import Amenities from './Amenities'
import '../CSS/Navbar.css'


function Navbar(props) {
    return (
        <div>
            <Router>
          <div className='Navbar'>
            <nav>
              <ul className="navbar-link" >
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/Suites">ROOMS&SUITES</Link>
                </li>
                <li>
                  <Link to="/Amenities">OUR AMENITIES</Link>
                </li>
                <li>
                  <Link to="/Book">BOOK NOW</Link>
                </li>
                <li>
                  <Link to="/Contact">CONTACT</Link>
                </li>
               
                <li>
                  <Link to="/Map">MAP</Link>
                </li>
                <li style={{marginLeft:"300px"}}>
                  Sercan Island Resort
                </li>
              
               
              </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/Suites">
                <Suites />
              </Route>
              <Route path="/Amenities">
                <Amenities/>
              </Route>
              <Route path="/Book">
                <Book />
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
              <Route path="/Map">
                <Map/>

              </Route>
             
            </Switch>
          </div>
        </Router>
        </div>
    );
}
export default Navbar;