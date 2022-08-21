import React from "react";

const Navbar = React.lazy(() => import("./components/Navbar"));

const Hero = React.lazy(() => import("./components/Hero"));

const Works = React.lazy(() => import("./components/Portfolio"));

const Footer = React.lazy(() => import("./components/Footer"));

export default function Home() {
  return (
    <>
      <div className="bg-transition h-screen">
        <Navbar />
        <Hero />
      </div>
      <Works />
      <Footer />
    </>
  );
}
