import ArrowUpSLineIcon from "remixicon-react/ArrowUpSLineIcon";
import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <footer className="container pt-8">
      <a href="#" className="btn justify-center">
        <ArrowUpSLineIcon color="#fff" />
        <p>Back to top</p>
      </a>
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
