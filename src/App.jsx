import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Complaint from "./pages/Complaint";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ComplaintDetails from "./pages/ComplaintDetails";

function App() {
  const [complaints, setComplaints] = useState(() => {
    const saved = localStorage.getItem("complaints");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("complaints", JSON.stringify(complaints));
  }, [complaints]);

  const addComplaint = (complaint) => {
    setComplaints([...complaints, { ...complaint, id: Date.now(), status: "Pending" }]);
  };

  const deleteComplaint = (id) => {
    setComplaints(complaints.filter((c) => c.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/complaint" element={<Complaint addComplaint={addComplaint} />} />
      <Route path="/dashboard" element={<Dashboard complaints={complaints} />} />
      <Route path="/admin-dashboard" element={<AdminDashboard complaints={complaints} deleteComplaint={deleteComplaint} />} />
      <Route path="/complaint-details/:id" element={<ComplaintDetails complaints={complaints} />} />
    </Routes>
  );
}

export default App;