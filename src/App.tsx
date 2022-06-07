import React from 'react';
import { Routes, Route } from "react-router-dom";

const Navbar = React.lazy(
  () => import('./components/Navbar')
)

const Hero = React.lazy(
  () => import('./components/Hero')
)

const Works = React.lazy(
  () => import('./components/Works')
)

const Footer = React.lazy(
  () => import('./components/Footer')
)

const About = React.lazy(
  () => import('./components/About')
)

export function App() {
  return (
    <main className='bg-primary'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </main>
  );
}

function Home() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Hero />
      </div>
      <Works />
      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  )
}