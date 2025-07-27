import React, { CSSProperties } from "react";
import "./Button.scss";

// ✅ Define props type
interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  hoverStyle?: CSSProperties; // You can ignore this if unused
  children: React.ReactNode;  // ✅ Required for button content
}

// ✅ Use props in the component
const Button: React.FC<ButtonProps> = ({ className = "", type = "button", style = {}, hoverStyle, children }) => {
  return (
    <button className={`btn ${className}`} type={type} style={style}>
      {children}
    </button>
  );
};

export default Button;
