import React, { Suspense } from "react";
import Preloader from "../components/Preloader";

const Navbar = React.lazy(() => import("../components/Navbar"));
const About = React.lazy(() => import("../components/About"));
const Footer = React.lazy(() => import("../components/Footer"));

export default function AboutPage() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <div className="bg h-[100vh]">
          <Navbar />
          <About />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}
