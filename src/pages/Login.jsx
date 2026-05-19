import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/complaint");
  };

  return (
    <>
      <Navbar />
      <div className="container"><div className="card">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username / Aadhaar" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div></div>
    </>
  );
}