// Importing all the components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // React router Component
    <Router>
      <div>
        {/* Used to select which routes to take */}
        <Routes>
          {" "}
          {/* To render a component depending on the URL exact path hit in the browser*/}
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
        </Routes>{" "}
      </div>
    </Router>
  );
}

// Exporting App function
export default App;
