import React from 'react';

export default function Navbar() {
    return (
      <nav className='mx-auto'>
          <div className="container flex justify-between items-center py-5">
              <p className='font-light text-2xl'>LOUI<span className='font-bold'>SITE</span></p>
              <ul className='nav-link'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Works</li>
              </ul>
          </div>
      </nav>
    );
  }