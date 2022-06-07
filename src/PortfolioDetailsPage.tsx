import React from 'react';
import {useParams, Navigate} from 'react-router-dom';
import portfolio from './data/portfolio.js';

const Navbar = React.lazy(
  () => import('./components/Navbar')
)

const PortfolioDetails = React.lazy(
  () => import('./components/PortfolioDetails')
)

const Footer = React.lazy(
  () => import('./components/Footer')
)

export default function PortfolioDetailPage() {
  const params = useParams();
  const item = portfolio.find(({ id }) => id === parseInt(params.id || ''));
  
  if (item == undefined){
    return <Navigate to='/' />
  }

  return (
    <>
        <Navbar />
        <PortfolioDetails item = {item} />
        <Footer />
    </>
  )
}