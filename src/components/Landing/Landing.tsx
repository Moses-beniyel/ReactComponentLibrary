import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Landing.scss";
import ButtonRender from "../../render-components/Button";

const Landing: React.FC = () => {
  return (
    <div className="landing fl">
      {/* Left Panel: List of Components */}
      <div className="left-panel">
        <h3>Components</h3>
        <ul className="fl column">
          <li><Link to="/button">Button</Link></li>
          <li><Link to="/text">Text</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/label">Label</Link></li>
        </ul>
      </div>

      {/* Right Panel: Displays the selected component */}
      <div className="right-panel">
        <Routes>
          <Route path="/button" element={<ButtonRender />} />
          <Route path="/text" element={<div>Text Component</div>} />
          <Route path="/list" element={<div>List Component</div>} />
          <Route path="/label" element={<div>Label Component</div>} />
          <Route path="/" element={<p>Select a component to preview</p>} />
        </Routes>
      </div>
    </div>
  );
};

export default Landing;
