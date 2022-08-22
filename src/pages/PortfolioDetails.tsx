import { useParams, Navigate } from "react-router-dom";
import portfolio from "../data/portfolio.js";
import Navbar from "../components/Navbar";
import PortfolioDetails from "../components/PortfolioDetails";
import Footer from "../components/Footer";

export default function PortfolioDetailPage() {
  const params = useParams();
  const item = portfolio.find(({ id }) => id === parseInt(params.id || ""));

  if (item == undefined) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="bg">
        <Navbar />
        <PortfolioDetails item={item} />
      </div>
      <Footer />
    </>
  );
}
