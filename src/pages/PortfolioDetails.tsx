import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useParams, Navigate } from "react-router-dom";
import portfolio from "../data/portfolio.js";
import Preloader from "../components/Preloader";

const Navbar = React.lazy(() => import("../layouts/Navbar"));
const PortfolioDetails = React.lazy(
  () => import("../containers/PortfolioDetails")
);
const Footer = React.lazy(() => import("../layouts/Footer"));

export default function PortfolioDetailPage() {
  const params = useParams();
  const item = portfolio.find(({ id }) => id === parseInt(params.id || ""));

  if (item === undefined) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Helmet>
        <title>{item.title} | LOUISITE</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <div className="bg-gradient">
          <Navbar />
          <PortfolioDetails item={item} />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}
