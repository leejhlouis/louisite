import ArrowUpSLineIcon from "remixicon-react/ArrowUpSLineIcon";
import NavLinks from "./NavLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="container pt-8">
      <button onClick={scrollToTop} className="btn mx-auto">
        <ArrowUpSLineIcon color="#fff" />
        <p>Back to top</p>
      </button>
      <div className="py-6">
        <p className="pb-2 text-3xl font-light">
          LOUI<span className="font-bold">SITE</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-light">© LOUISITE 2022.</p>
        <NavLinks />
      </div>
    </footer>
  );
}
