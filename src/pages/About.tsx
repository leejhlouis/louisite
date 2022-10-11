import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/Preloader";
import about from "../__data/about/about.md";

const PageWrapper = React.lazy(() => import("../layouts/PageWrapper"));
const Navbar = React.lazy(() => import("../layouts/Navbar"));
const About = React.lazy(() => import("../layouts/sections/About"));
const Footer = React.lazy(() => import("../layouts/Footer"));

export default function AboutPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(about)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
        localStorage.about = text;
      });
  }, [content]);

  return (
    <>
      <Helmet>
        <title>About | LOUISITE</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <About children={content} />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  );
}
