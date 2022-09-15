import ArrowUpSLineIcon from "remixicon-react/ArrowUpSLineIcon";
import Button from "../components/Button";
import NavLinks from "../components/NavLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="container py-4 sm:py-6 lg:py-8">
      <Button
        onClick={scrollToTop}
        className="mx-auto mb-6"
        icon={<ArrowUpSLineIcon />}
        textContent="Back to top"
      />
      <div className="pt-8 pb-4">
        <p className="pb-2 text-2xl font-light md:text-3xl">
          LOUI<span className="font-bold">SITE</span>
        </p>
      </div>
      <div className="items-center justify-between pb-4 xs:flex">
        <p className="pb-4 font-light xs:pb-0">Made with ❤️ by Louis.</p>
        <NavLinks />
      </div>
    </footer>
  );
}
