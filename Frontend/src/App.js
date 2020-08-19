import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Permission, SuccessPermission, VerifyPermission } from "./views";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <div className="container">
            <Route exact path="/">
              <Permission />
            </Route>
            <Route path="/permission">
              <VerifyPermission />
            </Route>
            <Route path="/permissionSuccess">
              <SuccessPermission />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
