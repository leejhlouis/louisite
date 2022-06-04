import React from 'react';

const Navbar = React.lazy(
  () => import('./components/Navbar')
)

const Home = React.lazy(
  () => import('./components/Home')
)

export default function App() {
  return (
    <div className='bg-primary'>
      <div className="bg">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}