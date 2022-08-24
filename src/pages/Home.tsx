import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/Preloader";

const Navbar = React.lazy(() => import("../components/Navbar"));
const Hero = React.lazy(() => import("../components/Hero"));
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Footer = React.lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LOUISITE</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
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
