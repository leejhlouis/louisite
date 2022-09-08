import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <div className="bg-slate-200 text-slate-800 dark:bg-slate-900 dark:text-white">
    <React.StrictMode>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </React.StrictMode>
  </div>
);
