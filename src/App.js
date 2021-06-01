import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import SignUp from "./components/registerform";
import FormSwitch from "./components/FormSwitch";
import Loginform from "./components/loginform";
import Dashboard from "./components/Dashboard";

function App() {
  const adminUser = {
    email: "admin@property.com",
    password: "12345",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="main-wrapper">
      <Switch>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Loginform />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
