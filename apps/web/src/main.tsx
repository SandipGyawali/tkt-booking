import React from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.querySelector("#root") as HTMLDivElement;

if (!container.innerHTML) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </React.StrictMode>
  );
}
