import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h3>Welcome </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        excepturi sunt suscipit modi magni laboriosam esse error! Illum commodi,
        itaque natus eaque ratione consectetur tempore ex nobis ipsum culpa
        repellendus?
      </p>
      <Link to="/login">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default Dashboard;
