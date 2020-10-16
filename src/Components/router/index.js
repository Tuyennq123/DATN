import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Contact from '../Layout/Main/Contact'
  import Home from '../Layout/Main/Home/index'
  import Dashboard from '../Layout/Admin/Dashboard/index'
  import Doctor from '../Layout/Admin/Doctor'

  const Routers = ({ props })  => {

        return (

        <Router>
              <Route>
                <Switch>
                  <Route path="/ve-chung-toi">
                    <Contact />
                  </Route>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                </Switch>
              </Route>

              <Switch>
                <Route path="/admin" exact>
                  <Dashboard />
                </Route>
                <Route path="/bacsi">
                  <Doctor />
                </Route>
              </Switch>
      </Router>
        );
    }
Routers.propTypes = {}

export default Routers;