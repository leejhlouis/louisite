import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <About />
      </div>
      <Footer />
    </>
  );
}
