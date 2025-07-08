import React from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import SuspenseLoader from "./components/SuspenseLoading";
import { ClerkProvider } from "@clerk/clerk-react";
import { ENVIRONMENT } from "./lib/env";

const container = document.querySelector("#root") as HTMLDivElement;

if (!container.innerHTML) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <React.Suspense fallback={<SuspenseLoader />}>
        <ClerkProvider
          publishableKey={ENVIRONMENT.VITE_CLERK_PUBLISHABLE_KEY}
          afterSignOutUrl="/login"
        >
          <App />
        </ClerkProvider>
      </React.Suspense>
    </React.StrictMode>
  );
}
