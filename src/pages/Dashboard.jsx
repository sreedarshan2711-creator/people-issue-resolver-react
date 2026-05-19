import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard({ complaints }) {
  return (
    <>
      <Navbar />
      <div className="container"><div className="card">
        <h2>My Complaints</h2>
        {complaints.length === 0 ? <p>No complaints submitted yet.</p> : (
          <table className="table">
            <thead>
              <tr><th>ID</th><th>Issue</th><th>Date</th><th>Status</th></tr>
            </thead>
            <tbody>
              {complaints.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.title}</td>
                  <td>{c.date}</td>
                  <td>{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div></div>
    </>
  );
}