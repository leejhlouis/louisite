import React from 'react';
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(
  () => import('./Home')
)

const About = React.lazy(
  () => import('./AboutPage')
)

const Portfolio = React.lazy(
  () => import('./PortfolioDetailsPage')
)

export function App() {
  return (
    <main className='bg-primary'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </main>
  );
}