import React from "react";
import './Header.scss';
const Header: React.FC=({className="", title=""})=>{
  return (
    <header className={`header-${className}`}>
      This is the header component
    </header>
  
  );
}
export default Header;