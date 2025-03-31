import React from "react";
import "./Button.scss"
const Button: React.FC = ({ className = "", type = "", style = {}, hoverStyle=""}) => {
  return (
    <>
        <button className={`btn ${className}`} type={type} style={style}>Button</button>
    </>
    );
};
export default Button;
 