import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
