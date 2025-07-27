import React, { CSSProperties } from "react";
import "./Button.scss";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  hoverStyle?: string; // or remove this if not used
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  type = "button",
  style = {},
  hoverStyle = "",
  children = "Button",
}) => {
  return (
    <button className={`btn ${className}`} type={type} style={style}>
      {children}
    </button>
  );
};

export default Button;
