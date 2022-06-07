import React from 'react';

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

export default function App() {
  return (
    <main className='bg-primary'>
      <div className="bg">
        <Navbar />
        <Hero />
      </div>
      <Works />
      <Footer />
    </main>
  );
}