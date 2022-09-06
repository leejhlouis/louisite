import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}
