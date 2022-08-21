import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-transition h-screen">
        <Navbar />
        <Hero />
      </div>
      <Portfolio />
      <Footer />
    </>
  );
}
