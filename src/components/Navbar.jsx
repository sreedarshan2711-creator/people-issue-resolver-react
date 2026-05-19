import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h2>People Issue Resolver</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Navbar;