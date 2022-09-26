import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/Preloader";
import Wrapper from "../components/Wrapper";

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
        <Wrapper className="h-screen min-h-[480px]">
          <Navbar />
          <Hero />
          <Portfolio />
          <Footer />
        </Wrapper>
      </Suspense>
    </>
  );
}
