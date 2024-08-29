import "@/styles/tailwind.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";
import { BookProvider } from "./providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </StrictMode>,
);
