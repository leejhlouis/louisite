import React, { Suspense } from "react";

const Navbar = React.lazy(() => import("../components/Navbar"));
const Hero = React.lazy(() => import("../components/Hero"));
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Footer = React.lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg h-screen">
          <Navbar />
          <Hero />
        </div>
        <Portfolio />
        <Footer />
      </Suspense>
    </>
  );
}
