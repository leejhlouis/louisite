import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/Preloader";
import { useEffect, useState } from "react";
import about from "../__data/about/about.md";

const Wrapper = React.lazy(() => import("../components/Wrapper"));
const Navbar = React.lazy(() => import("../layouts/Navbar"));
const About = React.lazy(() => import("../containers/About"));
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
        <Wrapper>
          <Navbar />
          <About children={content} />
          <Footer />
        </Wrapper>
      </Suspense>
    </>
  );
}
