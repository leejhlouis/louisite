import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/Preloader";

const Wrapper = React.lazy(() => import("../components/Wrapper"));
const Navbar = React.lazy(() => import("../layouts/Navbar"));
const About = React.lazy(() => import("../containers/About"));
const Footer = React.lazy(() => import("../layouts/Footer"));

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | LOUISITE</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <Wrapper>
          <Navbar />
          <About />
        </Wrapper>
        <Footer />
      </Suspense>
    </>
  );
}
