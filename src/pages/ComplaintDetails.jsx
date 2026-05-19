import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

export default function ComplaintDetails({ complaints }) {
  const { id } = useParams();
  const complaint = complaints.find(c => c.id.toString() === id);

  if (!complaint) return <p>Complaint not found.</p>;

  return (
    <>
      <Navbar />
      <div className="container"><div className="card">
        <h2>Complaint Details</h2>
        <p><strong>Issue:</strong> {complaint.title}</p>
        <p><strong>Description:</strong> {complaint.issue}</p>
        <p><strong>Category:</strong> {complaint.category}</p>
        <p><strong>Date:</strong> {complaint.date}</p>
        <p><strong>Status:</strong> {complaint.status}</p>
      </div></div>
    </>
  );
}