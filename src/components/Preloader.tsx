import { BallTriangle } from "react-loader-spinner";

export default function Preloader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <BallTriangle color="#f0abfc" />
    </div>
  );
}
