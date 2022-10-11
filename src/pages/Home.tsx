import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/Preloader";

const PageWrapper = React.lazy(() => import("../layouts/PageWrapper"));
const Navbar = React.lazy(() => import("../layouts/Navbar"));
const Hero = React.lazy(() => import("../layouts/sections/Hero"));
const Works = React.lazy(() => import("../layouts/sections/Works"));
const Footer = React.lazy(() => import("../layouts/Footer"));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LOUISITE</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper className="h-screen min-h-[480px]">
          <Navbar />
          <Hero />
          <Works />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  );
}
