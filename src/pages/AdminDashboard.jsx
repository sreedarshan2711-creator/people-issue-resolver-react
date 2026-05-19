import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function AdminDashboard({ complaints, deleteComplaint }) {
  return (
    <>
      <Navbar />
      <div className="container"><div className="card">
        <h2>Admin Dashboard</h2>
        <table className="table">
          <thead>
            <tr><th>ID</th><th>Issue</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {complaints.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>{c.status}</td>
                <td>
                  <Link to={`/complaint-details/${c.id}`}><button>View</button></Link>
                  <button onClick={() => deleteComplaint(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></div>
    </>
  );
}