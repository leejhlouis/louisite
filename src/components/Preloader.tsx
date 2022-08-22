import { ThreeDots } from "react-loader-spinner";

export default function Preloader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ThreeDots color="#f0abfc" />
    </div>
  );
}
