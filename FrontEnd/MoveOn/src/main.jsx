import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TemaContexto } from "../src/contextos/TemaContexto.jsx";
import Cookies from "../cookies/Cookies.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TemaContexto>
        <App />
        <Cookies />
      </TemaContexto>
    </BrowserRouter>
  </StrictMode>
);
