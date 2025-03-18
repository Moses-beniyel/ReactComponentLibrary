import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./Landing.scss";
import ButtonRender from "../../render-components/Button";
import ButtonGroupRender from "../../render-components/ButtonGroup";


const Landing: React.FC = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  const components: any = {
    '/button': {
      name: 'Button',
      text: 'Button Renderer',
      component: <ButtonRender />,
    },
    '/buttongroup': {
      name: 'Button Group',
      text: 'Button Group Renderer',
      component: <ButtonGroupRender />,
    },
    '/text': {
      name: 'Text',
      text: 'Text Renderer',
      component: <div>Text Component</div>,
    },
    

  };
  return (
    <div className="landing fl">
      {/* Left Panel: List of Components */}
      <div className="left-panel fl column">
        <h3>Components</h3>
        <ul className="fl column flex1 overflow component-list ">
          {Object.keys(components).map((path) => (
              <li key={path} className={currentPath === path ? 'selected' : ''}>
                <Link to={path}>{components[path].name}</Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Right Panel: Displays the selected component */}
      <div className="right-panel fl flex1 column">
        <h3>{components[currentPath]?.text}</h3>
        <div className="fl column flex1 overflow">
        <Routes>
            {Object.keys(components).map((path) => (
              <Route key={path} path={path} element={components[path].component} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Landing;
