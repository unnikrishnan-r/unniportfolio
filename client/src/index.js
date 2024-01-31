// All imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Rendering App component at the root div in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
