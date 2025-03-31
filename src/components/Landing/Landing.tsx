import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./Landing.scss";
import ButtonRender from "../../render-components/Button";
import ButtonGroupRender from "../../render-components/ButtonGroup";
import DropdownRender from "../../render-components/Dropdown";
import FooterRender from "../../render-components/Footer";
import HeaderRender from "../../render-components/Header";
import ImageRender from "../../render-components/Image";
import LabelRender from "../../render-components/Label";
import ListRender from "../../render-components/List";
import LogoRender from "../../render-components/Logo";
import NavRender from "../../render-components/Nav";
import RibbonRender from "../../render-components/Ribbon";
import SocialLinksRender from "../../render-components/SocialLinks";
import TextBoxRender from "../../render-components/TextBox";
import TileRender from "../../render-components/Tile";
import BannerRender from "../../render-components/Banner";
import BannerGroupRender from "../../render-components/BannerGroup";
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

    '/banner': {
      name: 'Banner',
      text: 'Banner Renderer',
      component: <BannerRender />,
    },

    '/bannergroup': {
      name: 'BannerGroup',
      text: 'BannerGroup Renderer',
      component: <BannerGroupRender />,
    },

   '/dropdown': {
      name: 'Dropdown',
      text: 'Dropdown Renderer',
      component: <DropdownRender />,
    },


    '/footer': {
      name: 'Footer',
      text: 'Footer Renderer',
      component: <FooterRender />,
    },

    '/header': {
      name: 'Header',
      text: 'Header Renderer',
      component: <HeaderRender />,
    },

    '/image': {
      name: 'Image',
      text: 'Image Renderer',
      component: <ImageRender />,
    },

    
    '/label': {
      name: 'Label',
      text: 'Label Renderer',
      component: <LabelRender />,
    },

    '/list': {
      name: 'List',
      text: 'List Renderer',
      component: <ListRender />,
    },

    '/logo': {
      name: 'Logo',
      text: 'Logo Renderer',
      component: <LogoRender />,
    },

    '/nav': {
      name: 'Nav',
      text: 'Nav Renderer',
      component: <NavRender />,
    },

    
    '/ribbon': {
      name: 'Ribbon',
      text: 'Ribbon Renderer',
      component: <RibbonRender />,
    },

    
    '/sociallinks': {
      name: 'Social Links',
      text: 'Social Links Renderer',
      component: <SocialLinksRender />,
    },

    '/textbox': {
      name: 'TextBox',
      text: 'TextBox Renderer',
      component: <TextBoxRender />,
    },

    '/tile': {
      name: 'Tile',
      text: 'Tile Renderer',
      component: <TileRender />,
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
          <div className="container">
            <Routes>
              {Object.keys(components).map((path) => (
                <Route key={path} path={path} element={components[path].component} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
