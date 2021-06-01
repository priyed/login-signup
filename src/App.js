import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import SignUp from "./components/registerform";
import FormSwitch from "./components/FormSwitch";
import Loginform from "./components/loginform";
import Dashboard from "./components/Dashboard";

class App extends Component {
  state = {
    isLoggedIn: false,
    firstName: "Asabeneh",
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <FormSwitch />
        <Switch>
          <Route
            exact
            path="/signUp"
            component={(props) => (
              <SignUp
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleLogin={this.handleLogin}
              />
            )}
          />
          <Route
            path="/"
            component={(props) => (
              <Loginform
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleLogin={this.handleLogin}
              />
            )}
          />
          <Route
            path="/dashboard"
            component={(props) => {
              <Dashboard />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
