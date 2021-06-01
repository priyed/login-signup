import React from "react";
import { Link } from "react-router-dom";

function FormSwitch(props) {
  return (
    <div className="main-navigation">
      <Link className="link" to="/dashboard">
        Login
      </Link>
      <Link className="link" to="/signup">
        Sign Up
      </Link>
    </div>
  );
}

export default FormSwitch;
