import React from 'react';

const Navbar = React.lazy(
  () => import('./components/Navbar')
)

const About = React.lazy(
  () => import('./components/About')
)

const Footer = React.lazy(
  () => import('./components/Footer')
)

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  )
}