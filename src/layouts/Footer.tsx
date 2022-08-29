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
        onClickEventHandler={scrollToTop}
        className="mx-auto mb-6"
        icon={<ArrowUpSLineIcon />}
        textContent="Back to top"
      />
      <div className="py-6">
        <p className="pb-2 text-2xl font-light md:text-3xl">
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
