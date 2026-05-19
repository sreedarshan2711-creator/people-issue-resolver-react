import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Complaint({ addComplaint }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");
    const issue = form.get("issue");

    if (!title || !issue) {
      setError("Please fill all complaint details.");
      return;
    }

    addComplaint({
      title,
      issue,
      category: form.get("category"),
      date: form.get("date")
    });

    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="container"><div className="card">
        <form onSubmit={handleSubmit}>
          <input name="title" type="text" placeholder="Issue Title" />
          <textarea name="issue" placeholder="Issue Statement"></textarea>
          <select name="category">
            <option>Road Issue</option>
            <option>Water Problem</option>
            <option>Electricity</option>
          </select>
          <input name="date" type="date" />
          <button type="submit">Submit Complaint</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div></div>
    </>
  );
}