import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    if (!form.get("name") || !form.get("aadhaar") || !form.get("age") || !form.get("address")) {
      setError("All required fields must be filled.");
      return;
    }
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="container"><div className="card">
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full Name" required />
          <input name="aadhaar" type="text" placeholder="Aadhaar Number" required />
          <input name="age" type="number" placeholder="Age" required />
          <textarea name="address" placeholder="Address" required></textarea>
          <button type="submit">Register</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div></div>
    </>
  );
}