import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";

const App: React.FC = () => {
  return (
    <Router>
      <Landing/> {/* Keeps Left Panel Fixed */}
    </Router>
  );
};

export default App;
