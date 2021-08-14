import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './../App.css'
import Posts from './Posts';

const Nav = () => {
    return (
        <Router>
            <div className="cont">
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                </div>
            <Switch>
                <Route path ="/posts">
                    <Posts />
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

export default Nav
