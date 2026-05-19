import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>Resolve Public Issues Efficiently</h1>
        <p>Submit complaints to Collector, MLA, and Councillor digitally.</p>
        <Link to="/register"><button>Get Started</button></Link>
      </section>
    </>
  );
}