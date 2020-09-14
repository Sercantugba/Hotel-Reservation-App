import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

import Home from './Home'
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
                  <Link to="/Amenities">AMENITIES</Link>
                </li>
                <li>
                  <Link to="/Applicants">APPLICANTS</Link>
                </li>
                <li>
                  <Link to="/Contact">CONTACT</Link>
                </li>
                <li>
                  <Link to="/FloorPlan">FLOOR PLAN</Link>
                </li>
                <li>
                  <Link to="/Map">MAP</Link>
                </li>
                <li>
                  <Link to="/Photo">PHOTO</Link>
                </li>
                <li>
                  <Link to="/Resident">RESIDENT</Link>
                </li>
              </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Amenities">
                <Amenities/>
              </Route>
              <Route path="/Applicants">
                <Applicant />
              </Route>
              <Route path="/FloorPlan">
                <FloorPlan />
              </Route>
              <Route path="/Map">
                <Map />
              </Route>
              <Route path="/Photo">
                <Photo />
              </Route>
              <Route path="/Resident">
                <Resident/>
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        </div>
    );
}
export default Navbar;