import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/Preloader";

const Navbar = React.lazy(() => import("../layouts/Navbar"));
const Hero = React.lazy(() => import("../containers/Hero"));
const Portfolio = React.lazy(() => import("../containers/Works"));
const Footer = React.lazy(() => import("../layouts/Footer"));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LOUISITE</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <div className="bg-gradient-light dark:bg-gradient-dark h-screen min-h-[480px]">
          <Navbar />
          <Hero />
          <Portfolio />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}
