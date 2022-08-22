import React, { Suspense } from "react";
import { useParams, Navigate } from "react-router-dom";
import portfolio from "../data/portfolio.js";
import Preloader from "../components/Preloader";

const Navbar = React.lazy(() => import("../components/Navbar"));
const PortfolioDetails = React.lazy(
  () => import("../components/PortfolioDetails")
);
const Footer = React.lazy(() => import("../components/Footer"));

export default function PortfolioDetailPage() {
  const params = useParams();
  const item = portfolio.find(({ id }) => id === parseInt(params.id || ""));

  if (item == undefined) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <div className="bg">
          <Navbar />
          <PortfolioDetails item={item} />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}
