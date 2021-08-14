import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './../App.css'
import Posts from './Posts';
import Users from './Users';

const Nav = () => {
    return (
        <Router>
            <div className="cont">
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/users">Users</Link>
                </div>
            <Switch>
                <Route path ="/posts">
                    <Posts />
                </Route>
                <Route path ="/users">
                    <Users />
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

export default Nav
