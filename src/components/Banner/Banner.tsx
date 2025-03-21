import React from "react";
import "./Banner.scss";



interface BannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  fullWidth?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  className, 
  fullWidth, 
  buttonLabel, 
  onButtonClick 
}) => {
  return (
    <div className={`banner-container ${className || ""} ${fullWidth ? "full-width" : ""}`}>
      <div className="banner-content">
        <div className="banner-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="banner-text">
          {title && <h1>{title}</h1>}
          {subtitle && <p>{subtitle}</p>}
          {buttonLabel && (
            <button className="banner-button" onClick={onButtonClick}>
              {buttonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
